import express from "express";
const router = express.Router();

let cart = [];

router.get("/", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({ cart, total });
});

router.post("/", (req, res) => {
  const { productId, name, price, qty } = req.body;
  const existing = cart.find(item => item.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, name, price, qty });
  res.json({ message: "Item added", cart });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.productId !== id);
  res.json({ message: "Item removed", cart });
});

export default router;
