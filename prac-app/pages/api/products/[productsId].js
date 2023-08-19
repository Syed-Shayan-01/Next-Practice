import { getById } from "@/service/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { productsId } = req.query;
    const products = getById(productsId);
    return res.status(200).json(products);
  } 
  res.status(404).send();
}
