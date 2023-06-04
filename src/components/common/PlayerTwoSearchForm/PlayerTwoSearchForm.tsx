import React, { FC, FormEvent, ReactElement } from "react";
import useForm from "../../../hooks/useForm";
import { playerSearchFields } from "./fields";
import { PlayerSearchField } from "../PlayerOneSearchForm/fields";
import FormField from "../../ui/FormField";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

interface PlayerTwoSearchFormProps {
  className?: string;
  isLoading: boolean;
  isError: boolean;
  onSubmit: (data: PlayerSearchField[]) => void;
}

const PlayerTwoSearchForm: FC<PlayerTwoSearchFormProps> = (props): ReactElement => {
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

  const onFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validData = validateForm();

    if (validData) {
      onSubmit(validData);
    }
  }

  return (
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
  );
}

export default PlayerTwoSearchForm;
