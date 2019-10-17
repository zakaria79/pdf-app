import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  textField: {
    width: '100%',
  },
  formBlock: {
    padding: '2rem',
    border: '1px solid #eee',
    borderRadius: '3px',
  },
  buttonBlock: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  h1: {
    textAlign: 'center',
  },
}));

const Convert = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    url: 'https://oz79.fr',
  });
  const [isPdfReady, setIsPdfReady] = React.useState(false);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = async () => {
    try {
      axios.post('/pdf/convert', values);
      setIsPdfReady(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.formBlock}>
        <div>
          <h1 className={classes.h1}>Entrez une url</h1>
        </div>
        <TextField
          id="url"
          label="URL"
          className={classes.textField}
          value={values.url}
          onChange={handleChange('url')}
          margin="normal"
          variant="outlined"
        />
        <div className={classes.buttonBlock}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Convertir
          </Button>
        </div>
        {isPdfReady && (
          <div className={classes.buttonBlock}>
            <a href="/pdf/converted-file" download="file.pdf">
              <Button variant="contained" color="primary">
                <PictureAsPdfIcon />
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convert;
