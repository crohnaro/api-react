import { useState } from "react";

import  {TextField, Button} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

import Toasty from "../../components/Toasty";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}));
const Register = () => {
  const classes = useStyles();

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    job: {
      value: "",
      error: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };

  const handleRegisterButton = () => {
    let hasError = false;

    let newFormState = {
      ...form,
    };

    if (!form.name.value) {
      hasError = true;

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: "Digite o campo nome corretamente!",
      };
    }

    if (!form.job.value) {
      hasError = true;

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: "Digite o campo cargo corretamente!",
      };
    }

    if (hasError) {
      return setForm(newFormState);
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value,
    }).then((response) => {
      console.log("ok", response)
    })
  };

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ""}
          id="outlined-basic"
          variant="outlined"
          label="Digite seu nome"
          name="name"
          value={form.name.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          error={form.name.error}
          helperText={form.job.error ? form.job.helperText : ""}
          id="outlined-basic"
          variant="outlined"
          label="Digite seu cargo"
          name="job"
          value={form.job.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegisterButton}
        >
          Cadastrar
        </Button>
      </div>
      <Toasty open severity="error" text="Cadastro realizado" />
    </>
  );
};

export default Register;
