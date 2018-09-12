import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {formatDate} from '../utils/date';

const Bids = ({bids}) => {    
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell numeric>Amount</TableCell>
              <TableCell numeric>Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bids.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.carTitle}</TableCell>
                  <TableCell numeric>{row.amount}$</TableCell>
                  <TableCell>{formatDate(row.created)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
};

Bids.propTypes = {
    bids: PropTypes.array.isRequired,
};

export default Bids;
