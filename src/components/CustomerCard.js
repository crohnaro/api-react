import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Modal from '../components/ModalConfirm'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    }
}))

const CustomersCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal 
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={handleConfirmModal}
      title="Deseja excluir esse cadastro?"
      message="Fazendo essa ação, não sera possivel desfazer"
      />
    </>
    
  );
}

export default CustomersCard