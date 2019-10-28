import React from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {
    return (
        <div>
            <div className="col-lg-4 visible-lg
                            col-md-4 visible-md" style={{marginTop: '60px'}}>
                <div className="row">
                    <div className="col-lg-12
                                    col-md-12 thongbaoloi">
                        <b>Lỗi.</b> Vui lòng nhập đầy đủ thông tin
                    </div>
                    <div className="col-lg-12
                                    col-md-12 thongbaothanhcong">
                        <b>Đăng kí thành công</b>
                    </div>
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
                                <form action="">
                                    <span style={{fontSize: '18px'}}>Thành viên</span><br></br>
                                    <input type="text" name="" placeholder="Nhập ID thành viên" className="input"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Mật khẩu</span><br></br>
                                    <input type="password" name="" placeholder="Nhập mật khẩu" className="input"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Quyền</span><br></br>
                                    <select name="" className="input">
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
                            col-xs-12 visible-xs" style={{marginTop: '20px', position: 'absolute', zIndex: '2'}}>
                <div className="row">
                    <div className="col-sm-12
                                    col-xs-12 thongbaoloi">
                        <b>Lỗi.</b> Vui lòng nhập đầy đủ thông tin
                    </div>
                    <div className="col-sm-12
                                    col-xs-12 thongbaothanhcong">
                        <b>Đăng kí thành công</b>
                    </div>
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
                                <form action="">
                                    <span style={{fontSize: '18px'}}>Thành viên</span><br></br>
                                    <input type="text" name="" placeholder="Nhập ID thành viên" className="input"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Mật khẩu</span><br></br>
                                    <input type="password" name="" placeholder="Nhập mật khẩu" className="input"></input><br></br>
                                    <br></br><span style={{fontSize: '18px'}}>Quyền</span><br></br>
                                    <select name="" className="input">
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
        </div>
    );
}

export default Form;