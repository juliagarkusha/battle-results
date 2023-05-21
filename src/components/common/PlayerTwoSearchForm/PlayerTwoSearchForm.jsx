import React from "react";
import useForm from "../../../hooks/useForm";
import { playerSearchFields } from "./fields";
import FormField from "../../ui/FormField";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

const PlayerTwoSearchForm = (props) => {
  const {
    className,
    isLoading,
    isError,
    onSubmit = () => {},
  } = props;

  const {
    fields,
    isFormError,
    validateForm,
  } = useForm(playerSearchFields);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const validData = validateForm();

    if(validData) {
      onSubmit(validData, 'player2');
    }
  }

  return(
    <form onSubmit={onFormSubmitHandler} className={className}>
      {fields.map((field) => {
        return (
          <FormField key={field.name} {...field.bind} />
        )
      })}
      <Button
        variant="contained"
        type="submit"
        disabled={isFormError || isLoading}
      >
        Submit
        {isLoading && <Loader />}
      </Button>
      {isError && (<ErrorMessage />)}
    </form>
  )
}

export default PlayerTwoSearchForm;
