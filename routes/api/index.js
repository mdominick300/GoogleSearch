const router = require("express").Router();
const bookRoutes = require("./books");

// Listing routes
router.use("/books", bookRoutes);

module.exports = router;
