import axios from 'axios';
import utils from 'utility';
import {getRedirectPath} from "../utils/utils";

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';

const ERROR_MSG = 'ERROR_MSG';

const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    type: '',
    pwd: '',
    repeatpwd: '',
};

export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            };
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload
            };
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg
            };
        default:
            return state;
    }
}

function authSuccess(obj) {
    const {pwd, ...data} = obj;
    return {
        type: AUTH_SUCCESS,
        payload: data
    }
}

function errorMsg(msg) {
    return {
        type: ERROR_MSG,
        msg,
    }
}

function md5Pwd(pwd) {
    const salt = '123_hello_WORLD_!@#$%';
    return utils.md5(utils.md5(pwd + salt));
}

export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不一致')
    }

    return dispatch => {
        axios.post('/user/register', {user, type, pwd: md5Pwd(pwd)})
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export function login({user, pwd}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }

    return dispatch => {
        axios.post('/user/login', {user, pwd})
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export function loadData(userInfo) {
    return {type: LOAD_DATA, payload: userInfo}
}


export function update(data) {
    return dispatch => {
        axios.post('/user/update', data)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}