import React, { useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const uuidv4 = require('../../../../node_modules/uuid/v4');

const Form = (props) => {

    const [ state,setState ] = useState ({
        txtUser : '',
        txtPass : '',
        sltLevel : 'Thành viên',
        notice : false
    })

    const showNotice = () => {
        if(state.notice){
            return ( <div className="col-lg-12
                                     col-md-12 thongbaothanhcong">
                         <b>Đăng kí thành công</b>
                     </div>)
        }
    }

    const changeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({
            ...state,
            [name] : value
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        let item = {};
        item.id = uuidv4();
        item.username = state.txtUser;
        item.password = state.txtPass;
        item.level = state.sltLevel === 'Thành viên' ? 2 : 1;
        props.add(item);
        setState({
            ...state,
            notice : true 
        });
        setInterval(() => {
            setState({
                ...state,
                notice : false 
            })
        }, 2000);
    }
    return (
        <div>
            <div className="col-lg-4 visible-lg
                            col-md-4 visible-md" style={{marginTop: '60px'}}>
                <div className="row">
                    { showNotice() }
                    <div className="col-lg-12
                                    col-md-12 thembox">
                        <div className="row">
                            <div className="col-lg-12
                                            col-md-12 themboxhead">
                                Thêm
                                <a className="closebtn" onClick={ (event) => props.formToogle (event) }><FontAwesomeIcon icon={faTimesCircle} /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12
                                            col-md-12">
                                <form method="POST" onSubmit={ (e) => submitForm(e) }>
                                    <span style={{fontSize: '18px'}}>Thành viên</span><br></br>
                                    <input type="text" name="txtUser" onChange={ (e) => changeInput(e)} placeholder="Nhập ID thành viên"  className="input" required minLength="5"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Mật khẩu</span><br></br>
                                    <input type="password" name="txtPass" onChange={ (e) => changeInput(e)} placeholder="Nhập mật khẩu" className="input" required minLength="5"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Quyền</span><br></br>
                                    <select name="sltLevel" className="input" onChange={ (e) => changeInput(e)} value={ state.sltLevel }>
                                        <option value="Thành viên">Thành viên</option>
                                        <option value="Admin">Admin</option>
                                    </select><br></br>
                                    <input type="submit" className="thembtn" value="Thêm"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 visible-sm
                            col-xs-12 visible-xs" style={{marginTop: '20px'}}>
                <div className="row">
                    { showNotice() }
                    <div className="col-sm-12
                                    col-xs-12 thembox">
                        <div className="row">
                            <div className="col-sm-12
                                            col-xs-12 themboxhead">
                                Thêm
                                <a className="closebtn" onClick={ (event) => props.formToogle (event) }><FontAwesomeIcon icon={faTimesCircle} /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12
                                            col-xs-12">
                                 <form method="POST" onSubmit={ (e) => submitForm(e) }>
                                    <span style={{fontSize: '18px'}}>Thành viên</span><br></br>
                                    <input type="text" name="txtUser" onChange={ (e) => changeInput(e)} placeholder="Nhập ID thành viên"  className="input" required minLength="5"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Mật khẩu</span><br></br>
                                    <input type="password" name="txtPass" onChange={ (e) => changeInput(e)} placeholder="Nhập mật khẩu" className="input" required minLength="5"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Quyền</span><br></br>
                                    <select name="sltLevel" className="input" onChange={ (e) => changeInput(e)} value={ state.sltLevel }>
                                        <option value="Thành viên">Thành viên</option>
                                        <option value="Admin">Admin</option>
                                    </select><br></br>
                                    <input type="submit" className="thembtn" value="Thêm"></input>
                                </form>
                            </div>
                        </div>
                        <span id="themboxmobile"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;