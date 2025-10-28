import { Router } from 'express';

import productRoutes from "./product.js";
import cartRoutes from "./cart.js";
import checkoutRoutes from "./checkout.js";

const router = Router();

router.get('/', (req, res) => {
  res.end('hey');
});

router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/checkout", checkoutRoutes);

export default router;
