import React from 'react';
import image from '../assets/images/logo.png';
import { Route, Link, Routes } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import ProductoDestacadoInDb from './ProductoDestacadoInDb';
import ContenidoSwip from './ContenidoSwip';
import Error404 from './Error404';
import Product from './Product';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="SWIP"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - SWIP</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductoDestacadoInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Producto Destacado</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ContenidoSwip">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Contenido SWIP</span>
                    </Link>
                </li>

                {/* tabla */}
                <li className="nav-item">
                    <Link className="nav-link" to="/table">
                        <i className="fas fa-fw fa-film"></i>
                        <span>Lista de Productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route exat path='/' element={<ContentWrapper />} />
                <Route path='/CategoriesInDb' element={<CategoriesInDb />} />
                <Route path='/ProductoDestacadoInDb' element={<ProductoDestacadoInDb />} />
                <Route path='/ContenidoSwip' element={<ContenidoSwip />} />
                <Route path='/table' element={<Product />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;