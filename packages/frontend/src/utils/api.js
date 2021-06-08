/**
 * Form the URL and do a fetch to get data from server
 * @param {String} query query string of url
 * @returns fetch result
 */
const getApi = query => fetch(`/editor?${window.location.search.replace('?', '')}&sqlquery=${query}`)
    .then(result => result.json());

const postApi = url =>
    fetch(url, {
        method: 'POST'
    })
        .then(result => result.json())
        .then(res => window.location.href = res.redirectTo);

export const getAll = () => {
    const query = 'SELECT * FROM information_schema.columns WHERE table_schema="testdb" ORDER BY table_name,ordinal_position';

    return getApi(query);
}

export const executeQuery = query => getApi(query);

export const dbConnection = credentials => {
    if (!Object.keys(credentials).length > 0)
        return {};

    const url = `/connection?username=${credentials.username}&password=${credentials.password}&dbms=${credentials.dbms}`;

    return postApi(url);
}

export const handleLogout = () => postApi(`/logout?${window.location.search.replace('?', '')}`);