const express = require('express');
const adminLogin = require('../controllers/adminLogin');
const reviewController = require('../controllers/reviewController');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post("/adminlogin", adminLogin.login);
router.post("/aregister", adminLogin.register);
router.post("/update/:id", adminLogin.updateDetails); // Update admin details
router.get("/admin/:id", adminLogin.getAdmin); // Get admin details by ID

router.get("/review", reviewController.index);
router.post("/review", reviewController.post);
router.delete("/review/:id", reviewController.deleteReview);

router.get("/contact", contactController.index);
router.post("/contact", contactController.createContact);
router.delete("/contact/:id", contactController.deleteContact);

module.exports = router;
