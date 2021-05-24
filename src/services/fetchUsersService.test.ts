import fetchUsers from './fetchUsersService';

test('fetch users', async () => {
    const users = await fetchUsers({
        per_page: 10,
        login: 'artyom',
        page: 1
    });
    expect(users.items).toHaveLength(10);
});
