import { api_url } from "./secret";

const tryLogin = async (user, pswrd) => {
    const api = api_url;

    const resp = await fetch(api + "?" + new URLSearchParams({
        grant_type: "password",
        username: user,
        password: pswrd
    }),  {
        method: "POST",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin" : "*"
        }
    });

    const token = await resp.json();
    // alert(JSON.stringify(token));
    return token;
}

export default tryLogin;