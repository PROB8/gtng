import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = Array.from({ length: 100 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
}));

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));

const QuantitySelector = ({ qty, updateQuantity }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-select-quantity"
                    select
                    value={qty}
                    onChange={updateQuantity}
                    helperText="Please select your quantity"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    );
};

export default QuantitySelector;
