import axios from 'axios';
export function clickSearch(search) {
    return function(dispatch) {
        axios.get(`http://localhost:1337/articles/list?query=${search}`).then(res => {
        dispatch ({
            type: "Click_Search",
            payload: res.data
        });
    });
    }
    
    
    
};