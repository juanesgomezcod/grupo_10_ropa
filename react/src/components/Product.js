//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductList from './ProductList';

class Product extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('http://localhost:3001/api/products')
        .then(respuesta => respuesta.json())
        .then(products =>{
            this.setState({products: products.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- LISTA DE PRODUCTOS -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Todos los Productos</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                </tr>
                            </tfoot>
                            
                            <tbody>
                            
                                {
                                    
                                    this.state.products.map((Product,index) => {
                                        return <ProductList  {...Product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>

    </React.Fragment>
    )
    }
}
export default Product;
