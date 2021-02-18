let router=require("express").Router();
let categoryController=require("./controllers/categoryController");
let bookController=require("./controllers/bookController");
let userController=require("./controllers/userController");
let loginController=require("./controllers/loginController");
//Category

router.route("/category")
.get(categoryController.list)
.post(categoryController.create);
router.route("/category/:category_id").get(categoryController.getById);
router.route("/category/:category_id").put(categoryController.update);
router.route("/category/:category_id").delete(categoryController.delete);

//Book

 router.route("/book").get(bookController.list);
 router.route("/book/:book_id").get(bookController.getById);
 router.route("/book").post(bookController.create);
router.route("/book/:book_id").put(bookController.update);
router.route("/book/:book_id").delete(bookController.delete);

//User

router.route("/user").get(userController.list);
router.route("/user").post(userController.create);
router.route("/user/:userId").get(userController.getById);
router.route("/user/:user_id").put(userController.update);
router.route("/user/:user_id").delete(userController.delete);

//login



module.exports=router; 



