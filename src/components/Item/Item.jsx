import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, img, category, precio,unit } = product;

  // Obtener el precio del primer mercado del primer tipo de precio
  const price = precio && precio[0] && precio[0].markets[0] ? `$${precio[0].markets[0].price}` : 'Precio no disponible';

  return (
    <article>
      <h1>{name}</h1>
      <img src={`https://preciosjustos.micm.gob.do/img_p/${img}`} alt={name} style={{ width: 100 }} />
      <p>Categoría: {category}</p>
      <p>{unit}</p>
      <h2>{price}</h2>
      <Link to={`/detail/${id}`}>Ver Detalle</Link>
      <hr />
    </article>
  );
};

export default Item;

