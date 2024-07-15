let productsCache = null;

async function fetchData() {
  try {
    const response = await fetch('https://c1wzlcsbbf.execute-api.us-east-1.amazonaws.com/devproducts/products');
    const data = await response.json();
    productsCache = data.body || [];
    console.log("Productos cargados:", productsCache);
  } catch (error) {
    console.error("Error fetching products:", error);
    productsCache = [];
  }
}

export const getProducts = async () => {
  if (!productsCache) {
    await fetchData(); // Carga los productos si aún no están cargados
  }
  return productsCache; // Devuelve los productos o un arreglo vacío
};

export const getProductsByCategory = async (category) => {
  const allProducts = await getProducts();
  return allProducts.filter(product => product.category === category);
};

export const getProductById = async (productoId) => {
  const allProducts = await getProducts();
  return allProducts.find(product => product.id === Number(productoId));
};
