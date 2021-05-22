import React, {useEffect, useState, ChangeEvent, useContext } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core/'
import fetchUsers from 'services/FetchUsersService';
import debounce from 'helpers/debounceHelper';
import { UsersContext } from 'contexts/UsersContext';
import './styles.css'

function Search () {
    const [ _, setUsers, pagination ] = useContext(UsersContext);
    const [ search, setSearch ] = useState('');
    useEffect(() => {
        const searchUser = async () => {
            const res = await fetchUsers({
                login: search,
                page: pagination?.page || 1,
                per_page: pagination?.rowsPerPage || 10
            });
            setUsers(res.items);
        }
        searchUser();
    }, [search, pagination])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <div>
            <form action="">
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={search}
                        onChange={handleSearch}
                        labelWidth={60}
                    />
                </FormControl>
            </form>
        </div>
    );
}

export default Search;
