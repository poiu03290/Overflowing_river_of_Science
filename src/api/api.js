import { apiRequest } from ".";

export const getPostList = async (url) => {
    const response = await apiRequest.get(url);

    return response;
}