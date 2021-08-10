import axios from "axios";


const base_url = "https://loanapp-test-api.dev.intelia.io";
const token = window.localStorage.getItem('accessToken');

export default function requestMiddleware() {
    return ({ dispatch, getState }) => {
        return next => action => {
            // const { request } = action;

            // // if (!request) {
            // //     return next(action);
            // // }

            // // 5 minutes from now
            // // const refreshThreshold = (new Date.getTime() + 300000);

            // return axios.post(`${base_url}/auth/login/token`, { token })
            //     .then((body) => {
            //         // dispatch({ type: 'SET_TOKENS', payload: body });
            //         // request(body);
            //     })
            //     .catch((err) => {
            //     })
            // }
            // return request(tokens);
        };
    }
}