import React from "react";

const Pagination = ({ resultPerPage, totalResult, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResult / resultPerPage); i++) {
    pageNumbers.push(i);
    console.log("CACCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;