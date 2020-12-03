import axios from 'axios';

axios.interceptors.request.use(config => {
        if (config.baseURL === 'https://axios-app.firebaseio.com/users.json') {
            config.timeout = 4000
        } else {
            return config
        }
        console.log(config)
        return config;
    }, error => Promise.reject(error)
);