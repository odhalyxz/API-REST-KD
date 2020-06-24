const express = require("express");
const router = express.Router();

// Controller
const {
  createNewKdrama,
  listAllKdramas,
  updateKdrama,
  deleteKdrama,
  getKdrama
} = require("../controllers/kdrama.controllers");



// New Kdrama
router.post("/kdramas/new-Kdrama", createNewKdrama);

// Get All Kdramas
router.get("/kdramas", listAllKdramas);

// Get one Kdrama
router.get("/kdramas/:id", getKdrama);

// Edit Kdramas
router.put("/kdramas/edit/:id", updateKdrama);

// Delete Kdramas
router.delete("/kdramas/delete/:id", deleteKdrama);

module.exports = router;