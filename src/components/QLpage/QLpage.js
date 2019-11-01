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
      return <Form formToogle = { (event) => changeStatusForm(event) } add={ (item) => addAction(item) } ></Form>
    }
  }

  const changeStatusForm = (event) => {
    event.preventDefault();
    setState({
      statusForm : !state.statusForm,
      usersData: state.usersData
    })
  }



  
    const addAction = async (item) => {
      await axios.post('https://l73di.sse.codesandbox.io/data', item)
      const res = await axios.get(
        'https://l73di.sse.codesandbox.io/data'
        )
        setState({
          ...state,
          usersData : res.data
        })
    }

   

    const deleteAction = async (deleteID) => {
      await axios.delete(`https://l73di.sse.codesandbox.io/data/${deleteID}`)
      const res = await axios.get(
        'https://l73di.sse.codesandbox.io/data'
        )
        setState({
          ...state,
          usersData : res.data
        })
    }

  return (
    <div>
      <div className="container">
        <div className="row visble-lg visible-md">
          <Table  onDeleteClicked={(deleteID) => deleteAction(deleteID)} usersData={state.usersData} statusForm={ state.statusForm } formToogle = { (event) => changeStatusForm(event) }></Table>
          { showForm() }
        </div>
        <div className="row visible-sm visible-xs">
          { showForm() }
          <Table  onDeleteClicked={(deleteID) => deleteAction(deleteID)} usersData={state.usersData} statusForm={ state.statusForm } formToogle = { (event) => changeStatusForm(event) }></Table>
        </div>
      </div>
    </div>
  );
}

export default QLpage;
