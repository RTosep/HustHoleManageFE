import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Formik } from 'formik';
import { Typography } from '@material-ui/core';
import './forest.css';
import { ForestContext } from '../../../contextManager';

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

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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
  selectDropdown: { color: '#fff', backgroundColor: '#1b1f38' },
  menuItem: {
    '&:hover': {
      backgroundColor: '#3b3f58',
    },
  },
});

export default function ForestTable(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { ForestList, show, detail } = props;
  const { setShow, setDetail } = useContext(ForestContext);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, ForestList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          paddingLeft: '24px !important',
        },
      },
    },
  });

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
    <TableContainer>
        <Table className={classes.table} aria-label='custom pagination table'>
        <TableBody>
            {(rowsPerPage > 0
              ? ForestList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : ForestList
            ).map((item, index) => (
            <TableRow key={ item + index }>
                <TableCell style={{ width: 160 }} className='firstCell' height={{ height: 64 }} align='left'>
                  <div className='firstCellDiv'>
                    {item.name}
                  </div>
                </TableCell>
                <TableCell style={{ width: 270 }} height={{ height: 64 }} align='left'>
                  <button
                  type='button'
                  className='secondCellBtn'
                  onClick={ () => { setShow(1); setDetail(item); } }
                  >
                    {item.description}
                  </button>
                </TableCell>
                <TableCell style={{ width: 200 }} className='thirdCell' height={{ height: 64 }} align='center'>
                {`${item.apply_time.slice(0, 10)} ${item.apply_time.slice(11, 16)}`}
                </TableCell>
                <TableCell style={{ width: 110 }} height={{ height: 64 }} align='center'>
                {
                  {
                    0: <Typography className='text1'>管理员创建</Typography>,
                    1: <Typography className='text2'>已通过</Typography>,
                    2: <Typography className='text3'>待审核</Typography>,
                    3: <Typography className='text4'>已拒绝</Typography>,
                  }[item.apply_status]
                }
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
                rowsPerPageOptions={[5, 10, 15, 20]}
                colSpan={3}
                count={ForestList.length}
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
