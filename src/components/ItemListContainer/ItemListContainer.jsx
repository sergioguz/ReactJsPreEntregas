import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para seguimiento de carga
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    setLoading(true);  // Comienza la carga
    const fetchProducts = category ? getProductsByCategory : getProducts;

    fetchProducts(category)
      .then(loadedProducts => {
        setProducts(loadedProducts);
        setLoading(false);  // Finaliza la carga
        console.log(loadedProducts);
      })
      .catch(error => {
        console.error("Failed to load products:", error);
        setProducts([]);  // Establece productos a un array vacío en caso de error
        setLoading(false);  // Finaliza la carga
      });
  }, [category]);

  if (loading) {
    return <div>Cargando productos...</div>;  // Muestra mensaje de carga
  }

  return (
    <div>
      <h1>{greetings}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div>No hay productos disponibles.</div>  // Maneja el caso de no productos
      )}
    </div>
  );
};

export default ItemListContainer;



/*import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory} from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({greetings}) => {

  const [products, setProducts]= useState([])
  const {category} = useParams()
  console.log(category)
  
  


  useEffect(()=>{

    if(!category){
      getProducts()
        .then(loadedProducts => {
        setProducts(loadedProducts)
        console.log(loadedProducts);})
        .catch(error => {
          console.error("Failed to load products:", error);
          setProducts([])})
        //const loadedProducts = getProducts();
      //setProducts(loadedProducts)
      }else{
        getProductsByCategory(category)
          .then(loadedProducts => {
          setProducts(loadedProducts);})
          .catch(error => {
            console.error("Failed to load products:", error);
            setProducts([])})
    //const loadedProducts=getProductsByCategory(category);
    //setProducts(loadedProducts)
    }
  },[category])
  
  
  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products= {products}/>
    </div>
  )
}


export default ItemListContainer
*/