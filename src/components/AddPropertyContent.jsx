import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../utils/baseUrl';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function AddPropertyForm(props) {
  const navigate  = useNavigate();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
  });
  const [image, setImage] = useState(null); // Store file object

  const showToast = (msg, sev) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleCloseToast = () => {
    setOpen(false);
    setMessage('');
    setSeverity('success');
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store file object
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('location', formData.location);
    if (image) data.append('image_url', image); // Append file

    try {
      const response = await fetch(`${baseUrl}/api/properties/`, {
        method: 'POST',
        body: data, // Use FormData, not JSON
      });
      const result = await response.json();
      if (response.ok) {
        setError(null);
        showToast('Property added successfully', 'success');
        navigate('/properties',{ replace: true }); // Redirect to properties page
      } else {
        showToast("Error: Unable to save data ", 'error');
        setError(result.error || {});
      }
    } catch (error) {
      showToast('Error: Could not connect to server', 'error');
      console.error('Error:', error);
      setError({ general: 'Server error' });
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Add Property
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                onChange={handleChange}
                placeholder="Adisko"
                error={!!error?.name}
                helperText={error?.name || ''}
                color={error?.name ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <TextField
                required
                fullWidth
                id="description"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                error={!!error?.description}
                helperText={error?.description || ''}
                autoComplete="description"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Price</FormLabel>
              <TextField
                required
                fullWidth
                name="price"
                placeholder=""
                type="number"
                id="price"
                onChange={handleChange}
                error={!!error?.price}
                helperText={error?.price || ''}
                autoComplete="price"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="location">Location</FormLabel>
              <TextField
                required
                fullWidth
                name="location"
                placeholder="Kumasi Ghana"
                type="text"
                id="location"
                onChange={handleChange}
                error={!!error?.location}
                helperText={error?.location || ''}
                autoComplete="location"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <input
                required
                type="file"
                accept="image/jpeg,image/png,image/gif"
                id="image"
                onChange={handleImageChange}
                style={{ marginTop: '8px' }}
              />
              {error?.image && (
                <Typography color="error" variant="caption">
                  {error.image}
                </Typography>
              )}
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}