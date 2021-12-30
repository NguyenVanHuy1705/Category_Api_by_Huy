const Brand = require("../models/mysql_models/models_brand");
const Sequelize = require('sequelize');
const sequelize = require("../connections/mysql_sequelize");
const Op = Sequelize.Op;

class BrandController {
    constructor() {
    }

    create(req, res) {
        let body = req.body;
        if (body.name) {
            const category = {
                logo: body.logo,
                name: body.name,
                link: body.link
            };

            Brand.create(category)
                .then(data => {
                    res.send({
                        status: true,
                        message: "Tạo thương hiệu thành công",
                        data: data,
                    });
                })
                .catch(err => {
                    res.send({
                        status: false,
                        message: err.message || "Đã có lỗi xảy ra"
                    });
                });
        }
        else {
            res.json({
                status: false,
                message: "Không được để trống mục tên thương hiệu"
            })
        }
    }

    static async brand_search(req, res) {
        try {
            let body = req.body;
            let where = {};

            if (body.filter) {
                let filter = body.filter;

                if (filter.name) {
                    where.name = {[Op.substring]: `${filter.name}`};
                }
            }
            else {
                res.json({
                    status: false,
                    message: "Not found filter"
                });
            }
            let option = {
                where: where
            };

            let data = await Brand.findAll(option);
            res.json({
                status: true,
                message: "List brands",
                data: data
            });
        }
        catch (e) {
            res.json({
                status: false,
                message: e.message
            })
        }
    }

    static async detail_brand(req, res) {
        try {
            let body = req.body;
            let id = body.id;
            if (id) {
                let where = {};
                where.id = id;

                let option = {
                    where: where
                };
                let detail = await Brand.findOne(option);
                if (detail == null) {
                    res.json({
                        status: false,
                        message: "Not found brand",
                        error_code: 1
                    })
                }
                else {
                    res.json({
                        status: true,
                        message: "Show detail brand",
                        data: detail
                    });
                }
            }
            else {
                res.json({
                    status: false,
                    message: "Invalid id"
                })
            }
        }
        catch (e) {
            res.send({
                status: false,
                message: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            let body = req.body;
            let id = body.id;

            if (id) {
                let where = {};
                where.id = id;
                let option = {
                    where: where
                };
                if (body.name) {
                    const category = {
                        logo: body.logo,
                        name: body.name,
                        link: body.link
                    };

                    let data = await Brand.update(category, option);

                    res.json({
                        status: true,
                        message: "Update success",
                        data: data
                    })
                }
                else {
                    res.json({
                        status: false,
                        message: "Không được để trống mục tên thương hiệu"
                    })
                }
            }
            else {
                res.json({
                    status: false,
                    message: "Invalid id"
                })
            }
        }
        catch (e) {
            res.json({
                status: false,
                message: e.message
            })
        }
    }

    static async delete(req, res) {
        try {
            let body = req.body;
            let id = body.id;
            if (id) {
                let deleted = await Brand.update({status: 1},{where: {id: id}});
                console.log(deleted);

                // let data = await Brand.findAll({where: {status: 0}});
                res.json({
                    status: true,
                    message: "Delete success"
                })
            }
            else {
                res.json({
                    status: false,
                    message: "Invalid id"
                })
            }
        }
        catch (e) {
            res.send({
                status: false,
                message: e.message
            });
        }
    }
}
module.exports = BrandController;