import axios from "axios"

export default axios.create({
    baseURL : 'https://api.rawg.io/api/',
    params : {
        key : '83650e735c614cb5a482d57464ac0db2'
    }
});

