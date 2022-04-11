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
export const addd = (product: CategoryType) => {
    const url = `/category`;
    return instance.post(url, product);
}
export const readd = (_id: number) => {
    const url = `/category/${_id}`;
    return instance.get(url);
}
export const updatee= (product: CategoryType)=> {
    const url = `category/${product._id}`
    return instance.put(url, product)
}