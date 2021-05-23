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
    IconButton
} from '@material-ui/core';
import fetchUsers from 'services/FetchUsersService';
import debounce from 'helpers/debounceHelper';
import { rowsPerPageOptions } from 'constants/tableConstatnts';
import { UsersContext } from 'contexts/UsersContext';
import EmptyBox from 'assets/icons/empty-box.png';
import './styles.css'

const useStyles = makeStyles({
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
    wrapper: {
        padding: '25px 100px 50px 100px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
});

function Results () {
    const classes = useStyles();
    const [search] = useContext(UsersContext);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [users, setUsers] = useState<any[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [errorMessage, setErrorMessage] = React.useState('');
    // const searchUser = useRef(
    //     debounce(async (login: string) => {
    //
    //     }, 500)
    // );
    useEffect(() => {
        const a = async () => {
            try {
                console.log(555555);
                const res = await fetchUsers({
                    per_page: rowsPerPage,
                    login: search,
                    page
                });
                setUsers(res.items);
                setTotal(res.total_count);
            } catch (err) {
                setErrorMessage(err.message);
            }
        }
        a();
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
                        {row.avatar_url}
                    </TableCell>
                    <TableCell align="right">{row.login}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
    console.log(errorMessage);
    return (
        <div className={classes.wrapper}>
            {users?.length ?
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar url</TableCell>
                                <TableCell align="right">Login</TableCell>
                                <TableCell align="right">Type</TableCell>
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
                autoHideDuration={2000}
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
