
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRows } from '../dummyData';
import './UserList.css';

  
 

const UserList = () => {
  const [data, setData] = useState(userRows)
  const handaleDelete=(id)=>{
    const newData= data.filter(dt=> dt.id!==id)
    setData(newData)
  }
  const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    { field: 'username', headerName: 'user name', width: 160,renderCell:(params)=>{
      return (
        <div className='userListUser'>
        <img className='userListUserImg' src={params.row.avatar} alt="avater" />
        {params.row.username}
      </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
     
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
     
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
     
      width: 150,renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline onClick={()=>handaleDelete(params.row.id)} className="userListDelete" />

          </>
        )
      }
    },
    
  ];
    return (
        <div className='userList'>
            <DataGrid
            disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      
        </div>
    );
};

export default UserList;