import React, {useContext} from "react";
import {SET_ARTICLES_PER_PAGE, SET_CURRENT_PAGE} from "../../reducers/all.types";
import "./pagination.styles.scss";
import {ArticlesContext} from "../../contexts/articles.context";

const Pagination = ({articlesNum}) => {
    const [articlesState, articlesDispatch] = useContext(ArticlesContext);
    const pageNumbers = [];
    let curPag = (articlesState.currentPage);
    let maxPag = Math.ceil(articlesNum / articlesState.articlesPerPage);
    if (curPag<=5) {
        for (let i = 1; i <= maxPag && i<=10 ; i++) {
            pageNumbers.push(i);
        }
    } else if (curPag>=maxPag-5) {
        for (let i = maxPag-9; i <= maxPag ; i++) {
            pageNumbers.push(i);
        }
    }
    else {
        for (let i=curPag-4; i<=curPag+5 ;i++ ) {
            pageNumbers.push(i);
        }
    }

    const paginate = (pageNumber) => {
        articlesDispatch({type: SET_CURRENT_PAGE, payload: pageNumber});
    };
    const handlePerPageChange = (e) => {
        articlesDispatch({type: SET_ARTICLES_PER_PAGE, payload: e.target.value});
        paginate(1);
    };

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
           <div><span> News per page: </span>
            <select value={articlesState.articlesPerPage} onChange={handlePerPageChange} name="perPage" id="perPage"
                    className="perPage">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select></div>
        </div>
    )
};

export default Pagination;



