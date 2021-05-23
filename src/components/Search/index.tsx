import React, { useEffect, useState, ChangeEvent, useContext, useRef } from 'react';
import {FormControl, InputLabel, makeStyles, OutlinedInput} from '@material-ui/core/'
import fetchUsers from 'services/FetchUsersService';
import debounce from 'helpers/debounceHelper';
import { UsersContext } from 'contexts/UsersContext';
import './styles.css'

const useStyles = makeStyles({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    form: {
        padding: '50px 100px',
        width: '100%'
    }
});

function Search () {
    const classes = useStyles();
    const [ _, setUsers, pagination ] = useContext(UsersContext);
    const [ search, setSearch ] = useState('');
    const setSearchDebounce = useRef(
        debounce((value: string) => {
            setSearch(value.trim());
        }, 500)
    );

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
        setSearchDebounce.current(e.currentTarget.value);
    };

    return (
        <div className={classes.wrapper}>
            <form className={classes.form}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Users</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleSearch}
                        labelWidth={60}
                    />
                </FormControl>
            </form>
        </div>
    );
}

export default Search;
