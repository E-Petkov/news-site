import React, {useContext} from "react";
import {SET_ARTICLES_PER_PAGE, SET_CURRENT_PAGE} from "../../reducers/all.types";
import "./pagination.styles.scss";
import {ArticlesContext} from "../../contexts/articles.context";

const Pagination = ({articlesNum}) => {
    const [articlesState, dispatch] = useContext(ArticlesContext);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articlesNum / articlesState.articlesPerPage); i++) {
        pageNumbers.push(i);
    }
    const paginate = (pageNumber) => {
        dispatch({type: SET_CURRENT_PAGE, payload: pageNumber});
    };
    const handlePerPageChange = (e) => {
        dispatch({type: SET_ARTICLES_PER_PAGE, payload: e.target.value});
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
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select></div>
        </div>
    )
};

export default Pagination;



