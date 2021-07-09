import React from 'react';
import ReactPaginate from 'react-paginate';
import { Nav } from 'react-bootstrap';
import "./Pagination.css";

const Pagination = ({postsPerPage, postsPage, setCurrentPage}) => {
    const postCount = Math.ceil(postsPage.length / postsPerPage);
    const changePage =({selected}) =>{
        setCurrentPage(selected)
    }
    return (
        <Nav>
            <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} postCount ={postCount} 
            onPageChange={changePage} containerClassName={"paginationBttn"} />    
        </Nav>
    )
}

export default Pagination;




// import React from 'react';
// import {Nav} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Pagination = ({postsPerPage, totalPosts}) => {
//     const pageNumbers = [];
//     for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
//         pageNumbers.push(i);
//     }
//     return (
//         <Nav>
//             <ul className="pagination">
//                 {pageNumbers.map(number =>{
//                     <li key = {number} className="page-item">
//                         <a href="!#" className="page-link">
//                         {number}
//                         </a>
//                     </li>
//                 })}
//             </ul>
//         </Nav>
//     )
// }

// export default Pagination;
