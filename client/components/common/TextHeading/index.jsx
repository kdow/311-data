import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import sharedFontStyles from '@theme/fonts';

const useStyles = makeStyles(theme => ({
  headingBackground: {
    background: theme.palette.primary.main,
    backgroundPosition: 'top',
    height: '15vh',
    position: 'relative',
  },
  headingOverlayText: {
    left: '50%',
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -70%)',
  },
}));

const TextHeading = ({ children }) => {
  const classes = { ...useStyles(), ...sharedFontStyles() };

  return (
    <div className={classes.headingBackground}>
      <div className={classes.headingOverlayText}>
        <Typography variant="h3" className={clsx(classes.roboto, classes.bold, classes.jumbo)}>
          {children}
        </Typography>
      </div>
    </div>
  );
};

TextHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextHeading;
