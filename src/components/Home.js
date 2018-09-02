import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import { getPrefix } from '../utils';

const Home = props => {
  return (
    <div>
      <h2>{props.auth && 'Welcome user'} Home - Merchant App!</h2>
      <Link to="/merchant/add"> Add merchant </Link>

      {props.merchants.map((item, idx) => (
        <List key={idx}>
          <ListItem button>
            <Avatar>{getPrefix(item)}</Avatar>
            <ListItemText primary={`${item.firstName} ${item.lastName}`} />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

Home.propTypes = {
  merchants: PropTypes.array,
  auth: PropTypes.bool,
};

export default Home;
