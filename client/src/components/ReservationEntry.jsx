import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = theme => ({
  button: {
    borderRadius: 5,
    width: 60,
    margin: 8,
    marginLeft: 0,
    display: 'inline',
  },
});

const ReservationEntry = (props) => {
  const { reservationTime, restaurant, accept, classes } = props;

  return (
    <Button
      key={reservationTime}
      raised
      color="primary"
      className={classes.button}
      onClick={() => accept(reservationTime, restaurant)}
    >
      {reservationTime}
    </Button>
  );
};

export default withStyles(styles)(ReservationEntry);

ReservationEntry.propTypes = {
  accept: PropTypes.func.isRequired,
  restaurant: PropTypes.string.isRequired,
  reservationTime: PropTypes.string.isRequired,
};
