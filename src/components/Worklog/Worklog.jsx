import React from 'react';
import './Worklog.css';
import {studentsInfo, MIN, EXTRA, NORMAL} from "./studentsInfo";
import {makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Checkbox} from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    table: {
        minWidth: '0.8fr',
    },
    checkBox: {
        color: green[600]
    }
});


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const taskData = [{data: MIN, title: 'Min scope'}, {data: NORMAL, title: 'Normal scope'}, {data: EXTRA, title: 'Extra scope'}];

function Students() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <h2 class="title">Таблица со студентами/заданием/временем для реализационной функциональности</h2>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Имя студента</TableCell>
                        <TableCell align="left">Задание</TableCell>
                        <TableCell align="left">Время</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell align="left">{row.student}</TableCell>
                            <TableCell align="left">{row.task}</TableCell>
                            <TableCell align="left">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </React.Fragment>
    );
}


function Requirements() {
    const classes = useStyles();

  function groups(i) {
    return i.map(el => (
      <tr key={el.id}>
        <td>
          {(el.checked === '1') ?
            <input type="checkbox" checked readOnly disabled/> :
            <input type="checkbox" readOnly disabled/>}
        </td>
        <td>{el.score}</td>
        <td>{el.description}</td>
      </tr>
    ));
  }

  const MIN_LIST = groups(MIN);
  const NORMAL_LIST = groups(NORMAL);
  const EXTRA_LIST = groups(EXTRA);

  return (
  <React.Fragment>
      <h2 class="title">Самооценка с флажками и списком всех требований</h2>
      <table className="requirements-table">
          <tbody>
        <tr className="head">
          <td colSpan="3">Min scope (50)</td>
        </tr>
        {MIN_LIST}

        <tr className="head">
          <td colSpan="3">Normal scope (140)</td>
        </tr>
        {NORMAL_LIST}

        <tr className="head">
          <td colSpan="3">Extra scope (70)</td>
        </tr>
        {EXTRA_LIST}
        <tr className="head">
          <td colSpan="3">Total: 240 points</td>
        </tr>
          </tbody>
      </table>
  </React.Fragment>
  );
}

        </TableContainer>
    );
}


function Difficulties() {
    return (
      <React.Fragment>
        <h2 class="title">Основные 1-3 трудности для команды при внедрении</h2>
        <ul class="difficulties-list">
          <li>"Двойная" работа. Из-за первоначальной несработанности - два человека выполняли одну и ту же задачу.</li>
          <li>Мерж без пула. Возникали моменты, когда перед мержем не подтягивались актуальные изменения.</li>
        </ul>
      </React.Fragment>
    );
}



function Worklog() {
  return (
  <React.Fragment>
   <Students />
   <Requirements />
   <Difficulties />
  </React.Fragment>
  );
}


export default Worklog;
