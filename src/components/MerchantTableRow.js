import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { getPrefix } from '../utils';

const MerchantTableRow = ({item}) => {
    return (<TableRow key={item.id}>
      <TableCell> <Avatar>{getPrefix(item)}</Avatar> </TableCell>
      <TableCell>
        {`${item.firstName} ${item.lastName}`}
      </TableCell>
      <TableCell>
        {item.email}
      </TableCell>
      <TableCell>
        {item.phone}
      </TableCell>
      <TableCell>
        <Button variant="contained" color="secondary" size="small"> <DeleteIcon /> </Button>
      </TableCell>
    </TableRow>)
};

MerchantTableRow.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MerchantTableRow;