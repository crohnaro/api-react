import Header from "../../partials/Header/Header";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import useAuth from "../../state/auth";

const useStyles = makeStyles(() => ({
  container: {
    padding: "15px 0",
  },
}));

const Default = ({ children }) => {
  const classes = useStyles();

  const { user } = useAuth();
  
  return (
    <>
      <Header user={user} />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

export default Default;
