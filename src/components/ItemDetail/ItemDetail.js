import './ItemDetail.css';

export const ItemDetail = ({product}) => { 

    ///////----LÓGICA DE DETALLE PRODUCTO----/////////

        console.log(product)
    return (
        <div className="Item">
            <div className="ImagenCont">
                <img className="Imagen" src={product.photo} alt=""/>
            </div>
            <div className="Data">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <p>{product.detail}</p>
            </div>
        </div>
    );
};

