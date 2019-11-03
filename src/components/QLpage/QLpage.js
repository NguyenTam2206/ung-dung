import React, { useState, useEffect } from 'react';
import Table from './Table/Table';
import Form from './Form/Form';
import axios from 'axios';


const QLpage = () => {

  const [ state, setState ] = useState({
    statusForm : false,
    usersData  : [],
  })

  useEffect(()=> {
    const fetchData = async () => {
      const res = await axios(
        'https://5dbcda0030411e0014f27177.mockapi.io/api/users',
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
      ...state,
      statusForm : !state.statusForm,
      statusChangeForm : false
    })
  }

    const addAction = async (item) => {
      await axios.post('https://5dbcda0030411e0014f27177.mockapi.io/api/users', item)
      const res = await axios.get(
        'https://5dbcda0030411e0014f27177.mockapi.io/api/users'
        )
        setState({
          ...state,
          usersData : res.data
        })
    }

   

    const deleteAction = async (deleteID) => {
      await axios.delete(`https://5dbcda0030411e0014f27177.mockapi.io/api/users/${deleteID}`)
      const res = await axios.get(
        'https://5dbcda0030411e0014f27177.mockapi.io/api/users'
        )
        setState({
          ...state,
          usersData : res.data,
          statusChangeForm : false
        })
    }
    // https://5uj9g.sse.codesandbox.io/data


  return (
    <div>
      <div className="container">
        <div className="row visible-lg visible-md">
          <Table  
                  onDeleteClicked={(deleteID) => deleteAction(deleteID)} 
                  usersData={state.usersData} 
                  statusForm={ state.statusForm } 
                  formToogle = { (event) => changeStatusForm(event) }>
          </Table>
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
