import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';

function ContenidoSwip(){
    
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [categories, setCategories] = useState([])

    const getProducts = () => {

        fetch("http://localhost:3001/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))

    }

    useEffect(() => {getProducts()},
    [])

    const getUsers = () => {

        fetch("http://localhost:3001/api/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data)})

    }

    useEffect(() => {getUsers()},
    [])

    const getCategories = () => {

        fetch("http://localhost:3001/api/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            
            
    }

    

    useEffect(() => {getCategories()},
    [])



let productos = {
    color:   "primary",
    titulo: "Productos",
    valor: products.meta?.total || "-",
    icono: "fas fa-film",
}

let usuarios ={
    color:   "success",
    titulo: "Usuarios",
    valor: users.meta?.total || "-",
    icono: "fas fa-award",
}

let categorias = {
    color:   "warning",
    titulo: "Categorias",
    valor: categories.meta?.total || "-",
    icono: "fas fa-user",
}

let cardProps = [productos,usuarios,categorias];

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