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
import { IndividualCardListStyled } from './style';

const columns = [
    { id: 'set', label: 'Set', minWidth: 100 },
    { id: 'setName', label: 'SetName', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'imageUrl', label: 'ImageUrl', minWidth: 100 },
    { id: 'artist', label: 'Artist', minWidth: 100 },
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

const IndividualCardList = (props) => {
    const { filteredCard, rowDetails, randomBoosterItem, random } = props;
    console.log('filteredCard', filteredCard);
    console.log('random', random);
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
    const [cardDeatils, setCardDeatils] = React.useState([]);

    const handleOpen = row => {
        setOpen(true);
        setCardDeatils(row);
    };

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <IndividualCardListStyled>
        <div>
            <Paper className={classes.root}>
            {filteredCard.length === 0 ? (
                <h3>No card list are available with code {rowDetails.code}, Please select code 10E </h3>
            ):(
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
                                {filteredCard.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            <TableCell>
                                                {row.set}
                                            </TableCell>
                                            <TableCell>
                                                {row.setName}
                                            </TableCell>
                                            <TableCell>
                                                {row.name}
                                            </TableCell>
                                            <TableCell>
                                                {row.imageUrl}
                                            </TableCell>
                                            <TableCell>
                                                {row.artist}
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
                                                        <h2 id="transition-modal-title">{cardDeatils.name}</h2>
                                                        <p id="transition-modal-description">
                                                        <img src={cardDeatils.imageUrl} alt="Italian Trulli" />
                                                            <br />{cardDeatils.artist}
                                                        </p>
                                                    
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
                        count={filteredCard.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </React.Fragment>
            )}
        </Paper>
        </div>
        </IndividualCardListStyled>
    );
}

export default IndividualCardList;
