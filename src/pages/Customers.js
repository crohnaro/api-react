import { useState, useEffect } from "react";
import axios from "axios";
import CustomersCard from "../components/CustomerCard";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const classes = useStyles()

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;
      setCustomers(data);
    });
  }, []);

  return (
    <>
      <h1>Customers</h1>
      <Grid container>
        {
          customers.map((item) => (
            <Grid item xs={12} md={4}>
              <CustomersCard
                name={item.first_name}
                lastname={item.last_name}
                email={item.email}
                avatar={item.avatar}
                className={classes.card}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};

export default Customers;
