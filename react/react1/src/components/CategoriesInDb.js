import React ,{ useEffect, useState } from 'react';
import Category  from './Category';


function CategoriesInDb() {


    const [ categories, setCategories ]= useState([])


    useEffect( () => {

        fetch('/api/Categories')
            .then( respuesta => {
                return respuesta.json()
            })
            .then(categories => {
                setCategories(categories.data)
            })
    },[])

        return (
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
                                        categories.map((category,index)=>{
                                            return  <category  {...Category}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        
        )
    

}
export default CategoriesInDb;