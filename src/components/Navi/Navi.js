import React from 'react';
import './Navi.css';
import {Link} from 'react-router-dom';

const Navi = () => {
    return (
        <div className="container-fluid navbg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12
                            col-md-12
                            col-sm-12
                            col-xs-12">
                        <ul className="menu">
                            <li><Link to="/">Quản Lý</Link></li>
                            <li><Link to="/may-tinh">Máy Tính</Link></li>
                            <li><Link to="/ca-ro">Caro</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navi;