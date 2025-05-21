// en este archivo se hace el llamado a la api

export async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return [];
    }
  }