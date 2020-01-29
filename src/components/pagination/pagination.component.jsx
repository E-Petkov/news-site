import React from "react";

const Pagination = ({articlesPerPage, articlesNum, paginate, handlePerPageChange}) => {
    const pageNumbers =[];
    for(let i=1; i<=Math.ceil(articlesNum/articlesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <select value={articlesPerPage} onChange={handlePerPageChange} name="perPage" id="perPage">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>

        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )

};


export default Pagination;



// DO HEADER OPTIONS NEXT.....