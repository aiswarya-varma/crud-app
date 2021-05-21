/**
 * Form the URL and do a fetch to get data from server
 * @param {String} query query string of url
 * @returns fetch result
 */
const api = query => fetch(`/users?sqlquery='${query}'`)
    .then(result => result.json());

export const getAll = () => {
    const query = 'SELECT * FROM information_schema.columns WHERE table_schema="testdb" ORDER BY table_name,ordinal_position';

    return api(query);
}

export const executeQuery = query => {
    console.warn("in execute query");
    return api(query);
}