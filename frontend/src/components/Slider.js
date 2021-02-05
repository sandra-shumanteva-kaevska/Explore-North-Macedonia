import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
    sliderTitle: {
        color: '#2f0fde',
        fontWeight: 'bold',
        textShadow: '1px 0px',
        fontSize: 'x-large'
    }
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
    root: {
        color: '#2f0fde',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },

})(Slider);

export const Slider1 = ({ onChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography gutterBottom className={classes.sliderTitle}>Numer of persons: </Typography>
            <PrettoSlider min={1} max={10} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1} onChange={(event, newValue) => onChange(newValue)} />
        </div>
    )
}
