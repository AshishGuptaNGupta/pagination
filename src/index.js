import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './Pagination';



ReactDom.render(
    <div>
        <Pagination total={100} pageRange={10} itemPerPage="10" changePage={(offset)=>console.log(offset)}/>
    </div>
    ,document.getElementById("root"));

