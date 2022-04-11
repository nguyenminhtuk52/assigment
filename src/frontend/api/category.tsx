import { CategoryType } from "../types/category";
import instance from "./instance";

export const listt = () => {
    const url = `/category`;
    return instance.get(url);
}
export const removee = (_id: number) => {
    const url = `/category/${_id}`;
    return instance.delete(url);
}
export const addd = (category: CategoryType) => {
    const url = `/category`;
    return instance.post(url, category);
}
export const readd = (_id: number) => {
    const url = `/category/${_id}`;
    return instance.get(url);
}
export const updatee = (category: CategoryType) => {
    const url = `category/${category._id}`
    return instance.put(url, category)
}