export const API_URL = "https://dogsapi.origamid.dev/json";
const authorization = (token) => `Bearer ${token}`;
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
            headers: { Authorization: authorization(token)},
        },
    };
};
export const USER_GET = (token) => {
    return {
        URL: `${API_URL}/api/user`,
        options: {
            method: "GET",
            headers: { Authorization: authorization(token)},
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
            headers: { Authorization: authorization(token)},
            body: form
        },
    };
};
export const PHOTOS_GET = ({ page, total, user }) => {
    const pageS = `page=${page}`;
    const totalS = `total=${total}`;
    const userS = `user=${user}`;

    return {
        URL: `${API_URL}/api/photo/?_${pageS}&_${totalS}&_${userS}`,
        options: {
            method: "GET",
            cache: "no-store"
        },
    };
};
export const PHOTO_GET = (id) => {
    return {
        URL: `${API_URL}/api/photo/${id}`,
        options: {
            method: "GET",
            cache: "no-store"
        },
    };
};
export const PHOTO_PAGE_GET = ({ id }) => {
    return {
        URL: `${API_URL}/api/photo/${id}`,
    };
};
export const COMMENT_POST = (id, body, token) => {
    return {
        URL: `${API_URL}/api/comment/${id}`,
        options: {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                Authorization: authorization(token)
            },
            body: JSON.stringify(body)
        },
    };
};
export const PHOTO_DELETE = (id, token) => {
    return {
        URL: `${API_URL}/api/PHOTO/${id}`,
        options: {
            method: "DELETE",
            headers: { Authorization: authorization(token) },
        },
    };
};
export const PASSWORD_LOST = (body) => {
    return {
        URL: `${API_URL}/api/password/lost`,
        options: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        },
    };
};
export const PASSWORD_RESET = (body) => {
    return {
        URL: `${API_URL}/api/password/reset`,
        options: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        },
    };
};