import axios from "axios";

const BASEURL = axios.create({
    baseURL:'https://staging-v2-api.payrentz.com/',
});

export default BASEURL;