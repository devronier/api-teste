const express = require("express");

const userRoutes = express.Router();

userRoutes.post("/", (req, res) => {
  const senha = req.body.senha;

  if (senha.length < 8) {
    return res.sendStatus(400);
  }

  return res.sendStatus(201);
});

module.exports = userRoutes;
