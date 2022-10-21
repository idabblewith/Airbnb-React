import axios from "axios";
import { QueryFunctionContext } from '@tanstack/react-query';

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
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