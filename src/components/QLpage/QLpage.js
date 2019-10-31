import React, { useState, useEffect } from 'react';
import Table from './Table/Table';
import Form from './Form/Form';
import axios from 'axios';


const QLpage = () => {

  const [ state, setState ] = useState({
    statusForm : false,
    usersData  : []
  })

  useEffect(()=> {
    const fetchData = async () => {
      const res = await axios(
        'https://l73di.sse.codesandbox.io/data',
        )
        setState({
          ...state,
          usersData : res.data
      });
    }
      fetchData();
  }, []);


  const showForm = () => {
    if (state.statusForm) {
      return <Form formToogle = { (event) => changeStatusForm(event) }></Form>
    }
  }

  const changeStatusForm = (event) => {
    event.preventDefault();
    setState({
      statusForm : !state.statusForm,
      usersData: state.usersData
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
