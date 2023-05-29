import React, { ChangeEvent, FC } from "react";
import MUITextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import "./FormField.scss";

interface FormFieldProps {
    id: string;
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const FormField: FC<FormFieldProps> = (props) => {
    const {
        id,
        type,
        name,
        label,
        placeholder,
        value,
        onChange,
        error,
    } = props;

    return (
        <FormControl sx={{ width: '100%', mb: 1 }}>
            <FormLabel htmlFor={id} classes={{ root: "FormField-label" }}>
                {label}
            </FormLabel>
            <MUITextField
                error={!!error}
                autoFocus
                margin="dense"
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                fullWidth
                variant="outlined"
                value={value}
                onChange={onChange}
                classes={{
                    root: "input"
                }}
                InputProps={{
                    classes: {
                        notchedOutline: "FormField-notchedOutline",
                        root: "FormField"
                    }
                }}
            />
            {error && (
                <FormHelperText error>{error}</FormHelperText>
            )}
        </FormControl>
    );
}

export default FormField;
