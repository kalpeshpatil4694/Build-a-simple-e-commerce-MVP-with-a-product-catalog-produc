fetch('/api/products')
  .then(r => r.json())
  .then(products => {
    const catalog = document.getElementById('catalog');
    products.forEach(p => {
      const div = document.createElement('div');
      div.textContent = `${p.name} - $${p.price}`;
      catalog.appendChild(div);
    });
  });
