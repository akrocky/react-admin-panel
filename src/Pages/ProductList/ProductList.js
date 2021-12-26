import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productRows } from '../dummyData';
import './ProductList.css';

const ProductList = () => {
    const [data, setData] = useState(productRows)
    const handaleDelete=(id)=>{
        const newData= data.filter(dt=> dt.id!==id)
        setData(newData)
      }
      const columns = [
        { field: 'id', headerName: 'id', width: 90 },
        { field: 'product', headerName: 'Product', width: 160,renderCell:(params)=>{
          return (
            <div className='productListUser'>
            <img className='productListUserImg' src={params.row.image} alt="avater" />
            {params.row.name}
          </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
         
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
         
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
         
          width: 150,renderCell:(params)=>{
            return(
              <>
              <Link to={"/product/"+params.row.id}>
              <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline onClick={()=>handaleDelete(params.row.id)} className="productListDelete" />
    
              </>
            )
          }
        },
        
      ];
    return (
        <div className='productlist'>
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

export default ProductList;