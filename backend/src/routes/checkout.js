import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({
    total,
    timestamp: new Date().toISOString(),
    message: "Mock checkout successful!"
  });
});

export default router;
