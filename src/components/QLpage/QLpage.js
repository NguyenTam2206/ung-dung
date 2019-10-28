import React, { useState } from 'react';
import Table from './Table/Table';
import Form from './Form/Form';
import myData from '../../data.json';


const QLpage = () => {

  const [ state, setState ] = useState({
    statusForm : false,
    usersData  : myData
  })

  const showForm = () => {
    if (state.statusForm) {
      return <Form formToogle = { (event) => changeStatusForm(event) }></Form>
    }
  }

  const changeStatusForm = (event) => {
    event.preventDefault();
    setState({
      statusForm : !state.statusForm
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Table usersData={state.usersData} statusForm={ state.statusForm } formToogle = { (event) => changeStatusForm(event) }></Table>
          { showForm() }
        </div>
      </div>
    </div>
  );
}

export default QLpage;
