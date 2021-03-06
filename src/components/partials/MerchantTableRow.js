import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'

import {getPrefix} from '../../utils';


const MerchantTableRow = ({item}) => {
    const EditLink = props => <Link to={`/merchant/edit/${item.id}`} {...props} />;

    return (
      <TableRow key={item.id}>
        <TableCell>
          <Avatar>{getPrefix(item)}</Avatar>
        </TableCell>
        <TableCell>
          {item.isPremium && <strong>Premium</strong>}
        </TableCell>
        <TableCell>
          <Link to={`/merchant/${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>
        </TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.phone}</TableCell>
        <TableCell>
          <IconButton variant="contained" color="default" component={EditLink}>
            <EditIcon/>
          </IconButton>
        </TableCell>
      </TableRow>
    );
};

MerchantTableRow.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
};

export default MerchantTableRow;
