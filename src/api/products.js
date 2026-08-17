const products = [
  { id: "1", name: "Product 1", price: 10.99, description: "First product" },
  { id: "2", name: "Product 2", price: 19.99, description: "Second product" }
];

export const productsHandler = {
  list: () => new Response(JSON.stringify(products), { headers: { "content-type": "application/json" } }),
  get: (request, params) => {
    const product = products.find(p => p.id === params.id);
    if (!product) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(product), { headers: { "content-type": "application/json" } });
  }
};
