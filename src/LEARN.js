import { My_Context_Name } from '../contexts/My_Context_Name';
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";

static contextType = My_Context_Name;
put that in a class component, so it uses a context from a context provider it is wrapped by.
example:
console.log(this.context); // should log the entire state object of the context component.

--------------------------------------------------------------------------------

another way is to wrap a class OR FUNCTIONAL component the following way: (you can also use it with multiple contexts)

class My_Class_Component extends Component {
    render() {
        return (
            <My_Context_Name.Consumer>{(context) => {
                const {prop1, prop2} = context;
                return (
                    <div>...</div>
                    )
                }
            }
            </My_Context_Name.Consumer>
        );
    }
}
-----------------------------------------------------------------------------
the functions that are changing the state live inside the context, are declared right after the state declaration and look like:
my_function = () => {
    this.setState({state_Key: new_Value});
}
!!! you also need to pass it inside the <My_Context_Name.Provider value={{...this.state, my_function_random_name: this.my_function}}








//////////////////////////////




const indexOfLastArticle = this.state.currentPage * this.state.articlesPerPage;
const indexOfFirstArticle = indexOfLastArticle - this.state.articlesPerPage;
this.setState({
    ...this.state,
    currentArticle: this.state.articles.slice(indexOfFirstArticle, indexOfLastArticle)
});

this.paginate = this.paginate.bind(this);
this.handlePerPageChange = this.handlePerPageChange.bind(this);
this.handleLangChange = this.handleLangChange.bind(this);

paginate = (pageNumber) => {
    this.setState({...this.state, currentPage: pageNumber});
};

handlePerPageChange = (event) => {
    console.log(event.target.value);
    this.setState({...this.state, articlesPerPage: event.target.value});
    console.log(this.state.articlesPerPage);

    this.paginate(1);
};

handleLangChange = (event) => {
    console.log(event.target.value);
    this.setState({...this.state, lang: event.target.value});
    this.paginate(1);
};
