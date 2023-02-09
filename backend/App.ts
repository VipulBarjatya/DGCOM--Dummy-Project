import express, { Request, Response } from "express";
import products from "./sampleData/product";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p._id === req.params.id);
  console.log(product);

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
