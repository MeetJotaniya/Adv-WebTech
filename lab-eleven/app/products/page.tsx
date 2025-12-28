import pool from "@/lib/db";
import { log } from "console";
import { prisma } from "@/lib/prisma"; 

export default async function Products() {
   const products = await prisma.products.findMany();
console.log(products);

  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
