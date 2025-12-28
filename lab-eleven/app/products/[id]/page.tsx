import { prisma } from "@/lib/prisma";

export default async function Product({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id); 

  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}
