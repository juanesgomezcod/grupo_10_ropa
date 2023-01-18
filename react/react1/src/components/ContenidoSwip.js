import React from 'react';
import SmallCard from './SmallCard';

let productos = {
    color:   "primary",
    titulo: "Productos",
    valor: 21,
    icono: "fas fa-film",
}

let usuarios ={
    color:   "success",
    titulo: "Usuarios",
    valor: 79,
    icono: "fas fa-award",
}

let categorias = {
    color:   "warning",
    titulo: "Categorias",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productos,usuarios,categorias];


function ContenidoSwip(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContenidoSwip;