export const API_URL = "https://dogsapi.origamid.dev/json";
export const TOKEN_POST = (body) => {
    return {
        URL: `${API_URL}/jwt-auth/v1/token`,
        options: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        },
    };
};
export const TOKEN_VALIDATE_POST = (token) => {
    return {
        URL: `${API_URL}/jwt-auth/v1/token/validate`,
        options: {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
        },
    };
};
export const USER_GET = (token) => {
    return {
        URL: `${API_URL}/api/user`,
        options: {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        },
    };
};
export const USER_POST = (body) => {
    return {
        URL: `${API_URL}/api/user`,
        options: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        },
    };
};
export const PHOTO_POST = (form, token) => {
    return {
        URL: `${API_URL}/api/photo`,
        options: {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: form
        },
    };
};
export const PHOTOS_GET = ({ page, total, user }) => {
    const pageS = `page=${page}`;
    const totalS = `total=${total}`;
    const userS = `user=${user}`;

    return {
        URL: `${API_URL}/api/photo?_${pageS}&_${totalS}&_${userS}`,
        options: {
            method: "GET",
            cache: "no-store"
        },
    };
};