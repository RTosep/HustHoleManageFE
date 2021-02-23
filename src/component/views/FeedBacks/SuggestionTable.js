import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingLeft: '65px !important',
        paddingRight: '0px !important',
      },
    },
  },
});

export default function SuggestionsTable(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [detailText, setDetailText] = React.useState('');
  const [showDetail, setShowDetail] = React.useState(0);
  const { SuggestionList } = props;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, SuggestionList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
      className={showDetail === 1 ? 'detailBox' : 'notShow'}
      >
        <Typography className='sctnText'>建议内容</Typography>
        <div className='detailCtn'>
          {detailText}
        </div>
        <button
        type='button'
        className='sureSugText'
        onClick={() => { setShowDetail(0); }}
        >
          确认
        </button>
      </div>
      <TableContainer style={{ width: '1118px' }}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? SuggestionList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : SuggestionList
            ).map((item, index) => (
              <TableRow key={item + index}>
                <TableCell style={{ width: 85, color: '#707683' }} align='left' size='small'>
                  {item.id}
                </TableCell>
                <TableCell
                style={{ width: 550 }}
                align="left"
                size='small'
                >
                  <button
                  className='suggestionCtn'
                  type='button'
                  onClick={() => { setShowDetail(1); setDetailText(item.content); }}
                  >
                    {item.content}
                  </button>
                </TableCell>
                <TableCell style={{ width: 137, color: '#707683' }} align="left" size='small'>
                  {`${item.time.slice(11, 16)} ${item.time.slice(0, 10)}`}
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
                count={SuggestionList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage='每页显示条数'
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                }}
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
SuggestionsTable.propTypes = {
  SuggestionList: PropTypes.array.isRequired,
};
