import axios from "axios";

const ARTICLES_DATA = async () => {
        const res = await axios.get('http://localhost/news-site/src/php/test.php');
        return res.data;
};

export default ARTICLES_DATA();