const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "Auth route" });
});

module.exports = router;
