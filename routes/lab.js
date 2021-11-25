const express = require("express");
const router = express.Router();
const Lab = require("../models/lab");

router.get("/labs", (req, res, next) => {
  Lab.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/lab", (req, res, next) => {
  const lab = new Lab(req.body);
  lab
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put("/lab/:id", (req, res, next) => {
  Lab.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/lab/:id", (req, res, next) => {
  Lab.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/lab/:id", (req, res, next) => {
  Lab.findOneAndDelete({ _id: req.params.id })
    .then((result) => {
      res.status(200).send({ success: "ok" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
