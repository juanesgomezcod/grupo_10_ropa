import React, { useRef } from 'react';
import imagenFondo from '../assets/images/ropa1.jpg';

function ProductoDestacadoInDb(){

    const parrafo = useRef();

    const cambiarColor = () => {
        parrafo.current.classList.toggle('bg-primary')
    }


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 onMouseOver={ cambiarColor } className="m-0 font-weight-bold text-gray-800">Producto Destacado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Producto Destacado "/>
                    </div>
                    <p ref={parrafo}>Hoodie Astroworld. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="http://localhost:3001/productDetail/1">Ver Detalle del Producto</a>
                </div>
            </div>
        </div>
    )
}

export default ProductoDestacadoInDb;
