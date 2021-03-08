import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { CommentContext } from '../../../contextManager';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const {
    count,
    page,
    rowsPerPage,
    onChangePage,
  } = props;
  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  selectDropdown: { color: 'rgba(0, 0, 0, 0.87)', backgroundColor: 'white' },
  menuItem: {
    '&:hover': {
      backgroundColor: 'rgba(75, 159, 121, 0.12)',
    },
    '&:active': {
      backgroundColor: 'rgba(75, 159, 121)',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#4B9F79',
    },
  },
});

export default function CustomPaginationActionsTable(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { CommentList, checkList } = props;
  const [check, setCheck] = React.useState(0);
  const { setCheckList } = useContext(CommentContext);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, CommentList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleIdChange = () => {
    const obj = document.getElementsByName('checkId');
    let checkedList = [];
    for (let i = 0; i < CommentList.length; i += 1) {
      if (obj[i] && obj[i].checked) {
        checkedList.push(parseInt(obj[i].value, 10));
      }
    }
    setCheckList(checkedList);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer style={{ width: '1118px' }}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? CommentList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : CommentList
            ).map((item, index) => (
              <TableRow key={item.reply_local_id}>
                <TableCell width={{ width: 100 }} height={{ height: 64 }} align='center' size='small'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        onChange={handleIdChange}
                        name='checkId'
                        color="secondary"
                        value={item.id}
                        disableRipple
                      />
                    }
                    label={item.id}
                  />
                </TableCell>
                <TableCell style={{ width: 788 }} height={{ height: 64 }} align="left" size='small'>
                  {item.content}
                </TableCell>
                <TableCell height={{ height: 64 }} className={ item.is_deleted ? 'isDeletedText' : 'isNotDeletedText'} align="center" size='small'>
                  {item.is_deleted ? '已删除' : '未删除'}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={CommentList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage='每页显示条数'
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  MenuProps: { classes: { paper: classes.selectDropdown } },
                }}
                classes={{ menuItem: classes.menuItem }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
CustomPaginationActionsTable.propTypes = {
  CommentList: PropTypes.array.isRequired,
};
