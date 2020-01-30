import React from "react";

import "./pagination.styles.scss";

const Pagination = ({articlesPerPage, articlesNum, paginate, handlePerPageChange}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articlesNum / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <nav>
                <ul className="page-buttons">
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => paginate(number)} className='page-button'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <select value={articlesPerPage} onChange={handlePerPageChange} name="perPage" id="perPage" className="perPage">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>
        </div>
    )
};

export default Pagination;



