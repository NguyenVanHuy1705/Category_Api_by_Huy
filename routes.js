const CategoryController = require("./controllers/category");
const BrandController = require("./controllers/brand");

const categoryController = new CategoryController();
const brandController = new BrandController();

function setRoute(app) {

    // CATEGORY
    app.post("/category/create", categoryController.create);
    app.post("/category/category_list", CategoryController.category_list);
    app.post("/category/update", CategoryController.update);
    app.post("/category/delete", CategoryController.delete);
    app.post("/category/category_list/update_status", CategoryController.update_status);
    app.post("/category/detail_category", CategoryController.detail_category);

    // BRAND
    app.post("/brand/create", brandController.create);
    app.post("/brand/brand_search", BrandController.brand_search);
    app.post("/brand/update", BrandController.update);
    app.post("/brand/delete", BrandController.delete);
    app.post("/brand/detail_brand", BrandController.detail_brand);

}

module.exports = setRoute;