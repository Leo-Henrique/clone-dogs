export default function body(fields) {
    let body = {};

    Object.keys(fields).forEach(field => body[field] = fields[field].state.value);

    return body;
}