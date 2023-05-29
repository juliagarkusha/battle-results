import React, { ChangeEvent, FC, ReactElement } from "react";
import MUITextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import "./TextField.scss";

interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = (props): ReactElement => {
    const {
        id,
        name,
        label,
        placeholder,
        value,
        onChangeHandler,
    } = props;

    return (
        <FormControl sx={{ width: '100%' }}>
            <FormLabel htmlFor={id}>
                {label}
            </FormLabel>
            <MUITextField
                autoFocus
                margin="dense"
                id={id}
                name={name}
                placeholder={placeholder}
                type="text"
                fullWidth
                variant="outlined"
                value={value}
                onChange={onChangeHandler}
                sx={{ mb: 2 }}
                classes={{
                    root: "input"
                }}
                InputProps={{
                    classes: {
                        notchedOutline: "input"
                    }
                }}
            />
        </FormControl>
    );
}

export default TextField;
