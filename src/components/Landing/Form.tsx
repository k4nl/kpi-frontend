import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  email: string;
  setEmail: (email: string) => void;
  handleSearch: (e: any) => void;
  searching: boolean;
  error: boolean;
}


export default function Form({ email, setEmail, handleSearch, searching, error }: Props) {
  return (
    <Box
      component='form'
      style={{
        display: 'flex',
        padding: '30px 10px',
      }}
      onSubmit={(e) => handleSearch(e)}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} lg={12} md={12}>
          <TextField
            size='small'
            id="email"
            label="E-mail"
            placeholder='Digite aqui seu e-mail'
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: <span style={{ color: '#1f1f1f' }}>@kpis.tech</span>
            }}
          />
        </Grid>

        <Grid item sm={12} lg={12} md={12}>
          <Button variant="contained" onClick={(e) => handleSearch(e) }>
            {
              searching ? (
                <div style={{ textAlign: 'center', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>procurando</span>
                  <CircularProgress size={20} sx={{ color: '#ffffff' }} />
                </div>
              ) : 'Procurar'
            }
          </Button>
        </Grid>

        {
          error ? (
            <Grid item sm={12} lg={12} md={12}>
              <span style={{ color: '#ff0000' }}>E-mail não encontrado</span>
            </Grid>
          ) : null
        }
      </Grid>
    </Box>
  )
}
