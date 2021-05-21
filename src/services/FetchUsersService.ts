import fetchHelper from 'helpers/fetchHelper';

async function fetchUsers(
    login: string,
    options?: {
      token?: string | null;
      fetchOptions?: RequestInit;
    }) {
    const res =  await fetchHelper(`https://api.github.com/search/users?q=${login}`, options);
    return await res.json();
}

export default fetchUsers;
