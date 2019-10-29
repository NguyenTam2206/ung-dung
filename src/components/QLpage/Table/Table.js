import React from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Table = (props) => {
    const showBtn = () => {
        if(!props.statusForm){
            return <a className="editbtn them" onClick={ (event) => props.formToogle (event) }><FontAwesomeIcon icon={faPlus} /></a>
        }
        else{
            return <a className="editbtn xoa" onClick={ (event) => props.formToogle (event) }><FontAwesomeIcon icon={faTimesCircle} /></a>
        }
    }

    const classTable = () => {
        if(!props.statusForm){
            return "col-lg-12 col-md-12 col-sm-12 col-xs-12 tablebox"
        }
        else{
            return "col-lg-8 col-md-8 col-sm-12 col-xs-12 tablebox"
        }
    }

    const mappingData = () => {
        const tableRow = props.usersData && props.usersData.map( (value, key) => {
             return (   <tr key={key}>
                            <td style={{paddingLeft: '8px'}}>{ key + 1 }</td>
                            <td>{ value.username }</td>
                            <td>{ value.level === 1 ? 'Admin' : 'Nhân viên' }</td>
                            <td style={{textAlign: 'center', paddingLeft: '0px', paddingRight: '0px'}}><a className="editbtn sua"><FontAwesomeIcon icon={faEdit} /></a><a className="editbtn xoa"><FontAwesomeIcon icon={faTrash} /></a></td>
                        </tr> 
                    ); 
        });
            return tableRow;
    }

    return (
        <div className={ classTable() }>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Thành Viên</th>
                        <th>Quyền</th>
                        <th style={{textAlign: 'center'}}>
                            { showBtn ()}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { mappingData() }
                </tbody>
            </table>
        </div>
    );
}

export default Table;