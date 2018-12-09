let router = require('express').Router();
let all = require("./all");
let single = require("./single");

router.get("/", all);

router.get("/single/:modelId", single);

module.exports = router;
