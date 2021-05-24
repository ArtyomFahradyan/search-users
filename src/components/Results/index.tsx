import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper,
    TablePagination,
    makeStyles,
    Snackbar,
    Button,
    IconButton,
    Avatar
} from '@material-ui/core';
import fetchUsers from 'services/fetchUsersService';
import debounce from 'helpers/debounceHelper';
import { rowsPerPageOptions } from 'constants/tableConstatnts';
import { UsersContext } from 'contexts/UsersContext';
import EmptyBox from 'assets/icons/empty-box.png';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    emptyIcon: {
        width: '200px'
    },
    noDataWrapper: {
        display: 'grid',
        textAlign: 'center'
    },
    noDataText: {
        marginTop: '20px',
        fontSize: 'x-large'
    },
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    wrapper: {
        padding: '25px 100px 50px 100px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
}));

function Results () {
    const classes = useStyles();
    const [search] = useContext(UsersContext);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [users, setUsers] = useState<any[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [errorMessage, setErrorMessage] = React.useState('');

    const searchUser = useRef(
        debounce(async (login: string, per_page: number, newPage: number) => {
            if (!login) return;
            try {
                const res = await fetchUsers({
                    per_page,
                    login,
                    page: newPage
                });
                setUsers(res.items);
                setTotal(res.total_count);
            } catch (err) {
                setErrorMessage(err.message);
            }
        }, 500)
    );

    useEffect(() => {
        searchUser.current(search, rowsPerPage, page);
    }, [search, page, rowsPerPage])

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    const handleClose = (_: any, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorMessage('');
    };

    const renderBody = () =>  (
        <TableBody>
            {users?.map((row) => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        <Avatar className={classes.avatar} src={row.avatar_url} />
                    </TableCell>
                    <TableCell>{row.login}</TableCell>
                    <TableCell>{row.type}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );

    return (
        <div className={classes.wrapper}>
            {users?.length ?
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar</TableCell>
                                <TableCell>Login</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        {renderBody()}
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        component="div"
                        count={total}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableContainer> :
                <div className={classes.noDataWrapper}>
                    <img className={classes.emptyIcon} src={EmptyBox} alt="EmptyIcon" />
                    <div className={classes.noDataText}>No Data</div>
                </div>
            }
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(errorMessage)}
                autoHideDuration={3000}
                onClose={handleClose}
                message={errorMessage}
                action={
                    <React.Fragment>
                        <Button
                            color="secondary"
                            size="small"
                            onClick={(e) => handleClose(e)}>
                            UNDO
                        </Button>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={(e) => handleClose(e)}>
                            X
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default Results;
