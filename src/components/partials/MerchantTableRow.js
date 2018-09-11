import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

import { getPrefix } from '../../utils';

const MerchantTableRow = ({ item }) => {
  return (
    <TableRow key={item.id}>
      <TableCell>
        <Avatar>{getPrefix(item)}</Avatar>
      </TableCell>
      <TableCell>
        <Link to={`/merchant/${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>

      </TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.phone}</TableCell>
        <TableCell>
            <Link to={`/merchant/edit/${item.id}`}>Edit</Link>
        </TableCell>
    </TableRow>
  );
};

MerchantTableRow.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default MerchantTableRow;
