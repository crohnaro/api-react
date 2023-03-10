import { useState, useEffect } from "react";
import axios from "axios";
import CustomersCard from "../../components/CustomerCard";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))

const List = () => {
  const [customers, setCustomers] = useState([]);
  const classes = useStyles()

  const history = useHistory()

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;
      setCustomers(data);
    });
  }, []);

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newCustomersState = customers.filter(customer => customer.id !== id)
        setCustomers(newCustomersState)
      })
  }

  const handleEditCustomer = id => {
    history.push(`/customers/edit/${id}`)
  }

  return (
      <Grid container>
        {
          customers.map((item) => (
            <Grid item xs={12} md={4}>
              <CustomersCard
                id={item.id}
                name={item.first_name}
                lastname={item.last_name}
                email={item.email}
                avatar={item.avatar}
                className={classes.card}
                onRemoveCustomer={handleRemoveCustomer}
                onEditCustomer={handleEditCustomer}
              />
            </Grid>
          ))
        }
      </Grid>
  );
};

export default List;
