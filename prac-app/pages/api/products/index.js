import { getData, save } from "@/service/products";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const products = [
//   {
//     id: 1,
//     title: "I Phone",
//     description: "Dummy Data",
//     price: "600 USD",
//   },
//   {
//     id: 2,
//     title: "T-shirts",
//     description: "Dummy Data",
//     price: "500 USD",
//   },
// ];

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getData();
    return res.status(200).json(products);
  }else if (req.method === "POST"){
    const {title, description, price} = req.body;
    save(title, description, price);
    return res.status(201).json({});
  }
  res.status(404).json(products);
}
