import fetchHelper from 'helpers/fetchHelper';

async function fetchUsers(
    query: {
        login: string,
        per_page: number,
        page: number
    } = {
        login: '',
        per_page: 10,
        page: 1
    },
    options?: {
      token?: string | null;
      fetchOptions?: RequestInit;
    }) {
    const res =  await fetchHelper(
        `https://api.github.com/search/users?q=${query.login}&page${query.page}&per_page=${query.per_page}`,
        options
    );

    return await res.json();
}

export default fetchUsers;
