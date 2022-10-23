import axios from "axios";
import Cookie from 'js-cookie';
import { QueryFunctionContext } from '@tanstack/react-query';

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true,
});

export const getRooms = () => instance.get("rooms/").then(res => res.data);

export const getRoomDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}`).then(res => res.data);
}

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}/reviews`).then(res => res.data);
}

export const getMe = () => instance.get(`users/me`).then((response) => response.data);

export const logOut = () => instance.post(`users/log-out`, null, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    }
}).then(res => res.data);

export const githubLogin = (code: string) => instance.post(`/users/github`, { code }, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((res) => res.status);

export const lineLogin = (code: string) => instance.post(`/users/line`, { code }, {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
}).then((res) => res.status);

export interface IUsernameLoginVariables {
    username: string;
    password: string;
}

export interface IUsernameLoginSuccess {
    ok: string;
}

export interface IUsernameLoginError {
    error: string;
}

export const usernameLogin = ({ username, password }: IUsernameLoginVariables) =>
    instance.post(
        `/users/log-in`,
        { username, password },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    );

