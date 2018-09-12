import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const MerchantList = ({merchant}) => {
    return (
      <List key={merchant.id}>
        <ListItem>
          <Avatar>
            <EmailIcon />
          </Avatar>
          <ListItemText primary="Email" secondary={merchant.email} />
        </ListItem>
        <ListItem>
          <Avatar>
            <PhoneIcon />
          </Avatar>
          <ListItemText primary="Phone" secondary={merchant.phone} />
        </ListItem>
      </List>
    );
};

MerchantList.propTypes = {
    merchant: PropTypes.object.isRequired,
};

export default MerchantList;
