import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import MerchantTableRow from './partials/MerchantTableRow';

const Home = props => {
  const AddMerchantLink = props => <Link to="/merchant/add" {...props} />;

  return (
    <div>
      <h2>{props.auth && 'Welcome user'} Home - Merchant App!</h2>
      <Button variant="contained" color="primary" component={AddMerchantLink}>
        Add merchant
      </Button>
      <Button variant="contained" color="secondary" onClick={props.doSignOut}>
        Sign Out
      </Button>
      <br />
      <br />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.merchants.map(item => (
              <MerchantTableRow key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

Home.propTypes = {
  merchants: PropTypes.array,
  auth: PropTypes.bool,
  doSignOut: PropTypes.func,
};

export default Home;
