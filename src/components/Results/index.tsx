import React, { ChangeEvent, useContext } from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper,
    TablePagination,
    makeStyles
} from '@material-ui/core';
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
        padding: '50px 100px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
});

function Results () {
    const classes = useStyles();
    const [users, _, pagination, setPagination] = useContext(UsersContext);

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setPagination({
            rowsPerPage: pagination?.rowsPerPage || 9,
            page
        });
    };
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setPagination({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 1
        });
    };

    return (
        <div className={classes.wrapper}>
            {users?.length ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatar url</TableCell>
                                <TableCell align="right">Login</TableCell>
                                <TableCell align="right">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.avatar_url}
                                    </TableCell>
                                    <TableCell align="right">{row.login}</TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        component="div"
                        count={users?.length || 0}
                        rowsPerPage={pagination?.rowsPerPage || 10}
                        page={pagination?.page || 1}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableContainer> :
                <div className={classes.noDataWrapper}>
                    <img className={classes.emptyIcon} src={EmptyBox} alt="EmptyIcon" />
                    <div className={classes.noDataText}>No Data</div>
                </div>
            }

        </div>
    );
}

export default Results;
