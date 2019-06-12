import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ColorMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    color: '',
  });

  const handleChange = color => event => {
    setState({ ...state, color: event.target.value });
  };

  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }
  function handleSubmit(id) {
      props.setColor(id, state.color)
      handleClose()
  }
  let style = {
      backgroundColor: props.color,
      color: 'white',
      fontSize: '10px',
      padding: 0,
      border: 'none',
      background: 'none'
  }
  return (
    <div>
      <Button style={style} class="color-select-button" onClick={handleClickOpen}>First Color Picker</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Select Color</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Select
                native
                value={state.color}
                onChange={handleChange()}
                input={<Input id="color-native-simple" />}
              >
                <option value={'blue'}>Blue</option>
                <option value={'red'}>Red</option>
                <option value={'green'}>Green</option>
                <option value={'orange'}>Orange</option>
                <option value={'purple'}>Purple</option>
                <option value={'black'}>Black</option>
                <option value={'yellow'}>Yellow</option>
                <option value={'gold'}>Gold</option>
                <option value={'olive'}>Olive</option>
                <option value={'lime'}>Lime</option>
                <option value={'cadetblue'}>Cadet Blue</option>
                <option value={'orchid'}>Orchid</option>
                <option value={'maroon'}>Maroon</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit(props.id)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}