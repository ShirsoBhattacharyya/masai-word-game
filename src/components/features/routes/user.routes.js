const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");
//Adding a new user info
router.post("/newuser", async (req, res) => {
  const { username, difficulty } = req.body;
  try {
    let newUser = await UserModel.create({ username, difficulty });
    res.json({ message: "success", response: newUser });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});
//Getting user info sorted from highest to lowest score;
router.get("/ranking", async (req, res) => {
  try {
    let newUser = await UserModel.find({});
    newUser = newUser.sort((a, b) => b - a);
    res.json({ message: "success", response: newUser });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
});
//Updating score
router.put("/score/update/:id", async (req, res) => {
  let {id}=req.params;
  let updatedData=req.body;
  try {
    let user=await UserModel.updateOne({_id:id},{$set:updatedData});

    res.json({ message: "success", response: user });
  } catch (e) {
    res.status(500).send({ message: "error", response: e.message });
  }
});
module.exports = router;
