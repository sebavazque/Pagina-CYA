import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
    

    return (
        <div className="detailContainer">
            <div className="detailContent" key={producto.id}>
                
                    <div className="detailColum" > 
                        <img src={producto.img} alt="" />
                    </div>
                    
                    <div className="detailColum" >
                        <h1>{producto.titulo}</h1>
                        <p>{producto.descripcion}</p>
                        <p>{producto.descrip2}</p>
                        <p>{producto.descrip3}</p>
                    </div>

                    <div className="detailColum" >
                    <Link to="/nosotros" ><button>Ver fotos de nuestros productos</button></Link>
                    </div>
            </div>
            <Link to="/productos" ><button>Ver otros productos</button></Link>
        </div>
    );
}

export default ItemDetail