import axios from "axios";
import Cookie from 'js-cookie';
import { QueryFunctionContext } from '@tanstack/react-query';

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true,
});

export const getRooms = () => instance.get("rooms/").then(res => { console.log(`${res} \n\n`); return res.data });

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

export const getAmenities = () =>
    instance.get(`rooms/amenities`).then((res) => res.data);

export const getCategoriesAll = () =>
    instance.get(`categories`).then((res) => res.data);

export const getCategoriesRoom = () =>
    instance.get(`categories/room`).then((res) => res.data);

export const getCategoriesExperience = () =>
    instance.get(`categories/experience`).then((res) => res.data);


export interface IUploadRoomVariables {
    name: string;
    country: string;
    city: string;
    price: number;
    rooms: number;
    toilets: number;
    description: string;
    address: string;
    pet_friendly: boolean;
    kind: string;
    amenities: number[];
    category: number;
}


export const uploadRoom = (variables: IUploadRoomVariables) =>
    instance.post(
        `rooms/`,
        variables,
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then((res) => res.data);

export const getUploadURL = () =>
    instance.post(`medias/photos/get-url`, null,
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then((res) => res.data);

export interface IUploadImageVarialbes {
    file: FileList;
    uploadURL: string;
}

export const uploadImage = ({ file, uploadURL }: IUploadImageVarialbes) => {
    const form = new FormData();
    form.append("file", file[0]);
    return axios
        .post(uploadURL, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);
};

export interface ICreatePhotoVariables {
    description: string;
    file: string;
    roomPk: string;
}

export const createPhoto = ({
    description,
    file,
    roomPk,
}: ICreatePhotoVariables) =>
    instance.post(
        `rooms/${roomPk}/photos`,
        { description, file },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then((res) => { console.log(res.data); return res.data });