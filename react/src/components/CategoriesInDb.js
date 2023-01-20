import React ,{ Component } from 'react';
import Category  from './Category';


class CategoriesInDb extends Component {

    constructor(){
        super();
        this.state = {
            categories : []
        }
    }

    componentDidMount(){

        fetch("http://localhost:3001/api/categories")
        .then( respuesta => respuesta.json() )
        .then( categories => {            
            this.setState({categories: categories.data})
        })
        .catch(error => console.log(error))
    }

        render() {
            return(
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6   className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                        this.state.categories.map((category,index) =>{
                                            return <Category {...category} key={index} />
                                        })

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
            )
        }
            
        
        
    

}
export default CategoriesInDb;