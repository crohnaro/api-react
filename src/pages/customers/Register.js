import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}))
const Register = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.wrapper}>
        <TextField id="outlined-basic" variant="outlined" label="Digite seu nome" />
      </div>
      <div className={classes.wrapper}>
        <TextField id="outlined-basic" variant="outlined" label="Digite seu cargo" />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>

    </>
  );
};

export default Register;
