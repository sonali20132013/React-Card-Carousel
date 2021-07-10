import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { RandomBoosterDetailsStyled } from './style';

const columns = [
    { id: 'id', label: 'id', minWidth: 100 },
    { id: 'code', label: 'code', minWidth: 100 },
    { id: 'name', label: 'name', minWidth: 100 },
    { id: 'releaseDate', label: 'releaseDate', minWidth: 100 },
    { id: 'type', label: 'type', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: '#00cccc',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    close_button: {
        float: 'right',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '25px',
        cursor: 'pointer',
    },
}));

const RandomBoosterDetails = (props) => {
    const { randomBoosterItem, filterRandomItemCard } = props;
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = row => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const cardDetails = filterRandomItemCard.length ? filterRandomItemCard[0] : [];
    console.log('cardDetails', cardDetails);
    return (
        <RandomBoosterDetailsStyled>
            <div>
                <Paper className={classes.root}>
                <React.Fragment>
                <TableContainer className={classes.container}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {randomBoosterItem.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell>
                                            {row.id}
                                        </TableCell>
                                        <TableCell>
                                            {row.code}
                                        </TableCell>
                                        <TableCell>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {row.releaseDate}
                                        </TableCell>
                                        <TableCell>
                                            {row.type}
                                        </TableCell>
                                        <TableCell>
                                            <button type="button" onClick={() => handleOpen(row)}>Show</button>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                className={classes.modal}
                                                open={open}
                                                onClose={handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                timeout: 500,
                                                }}
                                            >
                                                <Fade in={open}>
                                                <div className={classes.paper}>
                                                    <button className={classes.close_button} onClick={handleClose}>X</button>
                                                    {filterRandomItemCard.length ? (
                                                    <div>
                                                        <h2 id="transition-modal-title">{cardDetails.name}</h2>
                                                        <p id="transition-modal-description">
                                                        <img src={cardDetails.imageUrl} alt="Italian Trulli" />
                                                            <br />{cardDetails.artist}
                                                        </p>
                                                    </div>
                                                    ) : 
                                                    (
                                                        <h3>There are no cards available with this code</h3>
                                                    )}
                                                
                                                </div>
                                                </Fade>
                                            </Modal>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={randomBoosterItem.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </React.Fragment> 
                </Paper>
            </div>    
        </RandomBoosterDetailsStyled>
    );
}

export default RandomBoosterDetails;
