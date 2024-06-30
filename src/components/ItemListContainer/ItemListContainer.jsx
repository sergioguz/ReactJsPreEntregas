//const categorias= ['Laptops','Smartphones','Cameras','Consoles','Accesories']

const categories= [
    {id:1, name:"Carnes", img: "https://s1.eestatic.com/2019/03/26/ciencia/nutricion/Carnes-Dietas-Obesidad-Nutricion_386222785_118855389_1706x960.jpg"},
    {id:2, name:"Granos",img: "https://thumbs.dreamstime.com/b/productos-granos-y-cereal-de-la-agricultura-97442370.jpg"},
    {id:3, name:"Vegetales",img: "https://th.bing.com/th/id/OIP.RqKok1McOwWchbp5uBS32QHaE7?rs=1&pid=ImgDetMain"},
    {id:4, name:"Frutas",img: "https://th.bing.com/th/id/R.45ae7d11c91a454be3a88c53cea9ff2c?rik=7pNJHSduLA%2fFHg&pid=ImgRaw&r=0"},
    {id:5, name:"Dulces",img:"https://th.bing.com/th/id/OIP.p1R_mZAXqA-kVFvC9DWC_wHaD4?rs=1&pid=ImgDetMain"}
]

function ItemListContainer({greetings}) {
    //console.log(categorias)
  return (
    <>
    <h2>{greetings}</h2>

    {categories.map(item=>
        <div key= {item.id} className="card" style={{width: '18rem'}}>
        <img src={item.img} class="card-img-top" alt={item.name}/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )}

    {/* <ul className="list-group">
        {categories.map((category)=>
            <li className="list-group-item" key={category.id}>{category.name}
            <img width= {200} src={category.img} alt={category.name} />
            </li>
            
        )}
    </ul> */}
    </>
    
  )
}

export default ItemListContainer