/**
 * Created by jay on 29/1/19.
 */
import axios from 'axios';
export default axios.create({
    baseURL: `http://127.0.0.1:5000/api/v1/`
});