import React, {useEffect, useState, ChangeEvent, useContext } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core/'
import fetchUsers from 'services/FetchUsersService';
import { UsersContext } from 'contexts/UsersContext';
import './styles.css'

function Search () {
    const [ _, setUsers ] = useContext(UsersContext);
    const [ search, setSearch ] = useState('');
    useEffect(() => {
        const searchUser = async () => {
            const res = await fetchUsers(search);
            setUsers(res.items);
        }
        searchUser();
    }, [search])

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
