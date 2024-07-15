const ItemDetail = ({ name, img, precio, category, subCategory, stock,unit}) => {
  const imageUrl = img ? `https://preciosjustos.micm.gob.do/img_p/${img}` : ''; // Ajusta la URL base
// Obtener el precio del primer mercado del primer tipo de precio
  const price = precio && precio[0] && precio[0].markets[0] ? `$${precio[0].markets[0].price}` : 'Precio no disponible';
  return (
    <article>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name || 'Producto'} style={{ width: 300 }} />
      <p>Category: {category || 'No especificada'}</p>
      <p>SubCategory: {subCategory || 'No especificada'}</p>
      <p>{unit || 'No especificada'}</p>
      <h2>{price}</h2>
      {/* Descomenta y ajusta ItemCount si es necesario */}
      {/* <ItemCount stock={stock} /> */}
    </article>
  );
}

export default ItemDetail;

