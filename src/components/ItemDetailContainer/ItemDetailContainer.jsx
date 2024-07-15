import { useEffect, useState } from "react";
import { getProductById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  // Estado para seguimiento de carga
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);  // Comienza a cargar
    getProductById(id)
      .then((res) => {
        setProduct(res);
        setLoading(false);  // Finaliza la carga
        console.log("Producto cargado:", res);
      })
      .catch((err) => {
        console.log("Error al cargar producto:", err);
        setLoading(false);  // Finaliza la carga incluso si hay un error
      });
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;  // Mensaje de carga
  }

  // Asegurar que el producto no es undefined antes de renderizar ItemDetail
  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;


/*import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res);
        console.log("Producto cargado:", res);
      })
      .catch((err) => console.log("Error al cargar producto:", err));
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;

*/


/*import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

  const [product,setProduct]= useState();
  
  const {id} = useParams()
  
  
  useEffect(()=>{
    getProductById(id)
        .then((res)=>{
          setProduct(res)
          console.log(res)
        })
        .catch((err)=> console.log(err))
  },[id])


  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
*/