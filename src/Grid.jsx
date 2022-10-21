import React, { useState,useEffect} from 'react';

import { AgGridReact ,AgGridColumn } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const Gridd = () => {
   const [rowData,setRowdata] = useState([]);
//    console.log(rowData)
  //  const [columnDefs] = useState([
  //      { field: 'id',sortable:true,filter:true},
  //      { field: 'name',sortable:true,filter:true },
  //      {field: 'phone',sortable:true,filter:true},
  //      {field:'email',sortable:true,filter:true,minWidth:300},
  //      { field :"avatar" ,sortable :true ,filter :true ,cellRendererFramework:{avatarFormatter} ,cellClass :"vertical-middle"}
       

  //  ])

   useEffect(()=>{
  fetch('https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users')
  .then(result =>result.json())
  .then(rowData => setRowdata(rowData))
   },[])
  
   const avatarFormatter = ({ value }) => {
    return <img src={value} width="50px" height="50px" alt='img' />
  }


   return (
       <div className="ag-theme-alpine box" style={{height: 800,width:1000,marginleft:40}}>
           <AgGridReact
               rowData={rowData}
              >
                 <AgGridColumn field="id" sortable={true} filter={true} cellClass="vertical-middle" />
                <AgGridColumn field="name" sortable={true} filter={true} cellClass="vertical-middle" />
<AgGridColumn field="phone" sortable={true} filter={true} cellClass="vertical-middle" />
<AgGridColumn field="email" headerName="Email" sortable={true} filter={true} cellClass="vertical-middle" minWidth='300' />
<AgGridColumn field="avatar" headerName="Avatar" sortable={true} filter={true} cellRendererFramework={avatarFormatter} cellClass="vertical-middle" />
           </AgGridReact>
       </div>
   );
};

export default Gridd;