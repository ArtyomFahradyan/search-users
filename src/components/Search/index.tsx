import React, { ChangeEvent, useContext } from 'react';
import { FormControl, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core/'
import { UsersContext } from 'contexts/UsersContext';

const useStyles = makeStyles({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: '50px 100px 25px 100px'
    }
});

function Search () {
    const classes = useStyles();
    const [ _, setSearch ] =useContext(UsersContext);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <div className={classes.wrapper}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="search-users">Users</InputLabel>
                <OutlinedInput
                    data-testid="required-input"
                    name="search"
                    id="search-users"
                    onChange={handleSearch}
                    labelWidth={60}
                />
            </FormControl>
        </div>
    );
}

export default Search;
