import Item from "../Item/Item"


const ItemList = ({ products }) => {
  // Asegurar que 'products' sea un arreglo antes de intentar mapearlo.
  if (!products || !Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }


  // En ItemList.jsx
return (
  <div>
      {products.map(product => <Item key={product.id} product={product} />)}
  </div>
);
};


export default ItemList;





/*import Item from "../Item/Item"


const ItemList = ({products}) => {
  return (
    <div>
        {products.map( prod=>{
            return <Item key={prod.id}{...prod}/>
        })}
    </div>
  )
}

export default ItemList
*/