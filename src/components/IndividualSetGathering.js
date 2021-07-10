import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IndividualCardList from './IndividualCardList';
import RandomBoosterDetails from './RandomBoosterDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IndividualSetGatheringStyled } from './style';

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'code', label: 'Code', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'releaseDate', label: 'ReleaseDate', minWidth: 100 },
    { id: 'block', label: 'Block', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const IndividualSetGathering = (props) => {
    const { gatherings, gatheringOfCards } = props;
    console.log('gatherings', gatherings);
    console.log('gatheringOfCards', gatheringOfCards);
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
    const [filteredCard, setFilteredCard] = useState([]);
    const [showCardList, setShowCardList] = useState(false);
    const [rowDetails, setRowDetails] = useState([]);
    const [randomBoosterItem, setRandomBoosterItem] = useState([]);
    const [randomCode, setRandomCode] = useState();
    const [random, setRandom] = useState(false);
    const handleClick = row => {
        setRowDetails(row);
        const filterCard = gatheringOfCards.filter( fCard => fCard.set === row.code);
        setFilteredCard(filterCard);
        setShowCardList(true);
    };
    const goBack = () => {
        setShowCardList(false);
        setRandom(false);
    };

    const selectBooster = () => {
        const filterBooster = gatherings.filter( bList => bList.booster );
        const randomItem = filterBooster[Math.floor(Math.random()*filterBooster.length)];
        setRandomBoosterItem([randomItem]);
        setRandomCode(randomItem);
        setShowCardList(true);
        setRandom(true);
    };
    const filterRandomItemCard = gatheringOfCards.filter(item => item.set === randomCode?.code);

    return (
        <IndividualSetGatheringStyled>
            <div class="header">
                <a href="#default" class="logo">MAGIC: THE GATHERING</a>
                {showCardList === true ? 
                    (
                    <div class="header-right">
                        <button className="back_button" onClick={goBack}>Back</button>
                    </div>
                    ) : (
                    <div class="header-right">
                        <button className="back_button" onClick={selectBooster}>Select Random Booster</button>
                    </div>
                )}
            </div>
            {gatherings.length === 0 ? (
            <div className="loader"><CircularProgress /></div>
            ) : (
            <React.Fragment>
            {random === false ? (
            <div className="body_container">
            {showCardList === false ? 
            (
            <Paper className={classes.root}>
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
                            {gatherings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                         <TableCell>
                                            {row.name}
                                         </TableCell>
                                         <TableCell>
                                            {row.code}
                                         </TableCell>
                                         <TableCell>
                                            {row.type}
                                         </TableCell>
                                         <TableCell>
                                            {row.releaseDate}
                                         </TableCell>
                                         <TableCell>
                                            {row.block}
                                         </TableCell>
                                         <TableCell>
                                            <button onClick={(event) => handleClick(row)}>View</button>
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
                    count={gatherings.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            ):(
                 <div>
                     <IndividualCardList 
                        filteredCard={filteredCard}
                        rowDetails={rowDetails}
                        goBack={goBack} 
                        />
                </div>
            )}
            </div>
            ) : (
                <RandomBoosterDetails 
                    goBack={goBack} 
                    randomBoosterItem={randomBoosterItem}
                    filterRandomItemCard={filterRandomItemCard}
                />
            )}
            </React.Fragment>
            )}
        </IndividualSetGatheringStyled>
    );
}

export default IndividualSetGathering;
