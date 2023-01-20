import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td>{props.precio}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;