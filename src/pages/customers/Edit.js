import { useEffect, useState } from "react";

import  {TextField, Button} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

import Toasty from "../../components/Toasty";

import { useParams } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}));
const Edit = () => {
  const classes = useStyles();
  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
        .then(response =>{
            const { data } = response.data
            setUser(data)
        })
  })

  const [form, setForm] = useState({
    name: {
      value: user.first_name,
      error: false,
    },
    job: {
      value: user.job,
      error: false,
    },
  });

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
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
      setOpenToasty(true)
      setIsLoading(false)
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
          disabled={isLoading}
        >
          {
            isLoading ? "Aguarde..." : "Salvar Alterações"
          }
        </Button>
      </div>
      <Toasty 
      open={openToasty} 
      severity="success" 
      text="Registro atualizado com sucesso" 
      onClose={() => setOpenToasty(false)}
      />
    </>
  );
};

export default Edit;
