import React from 'react'
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


export default function LogoContainer() {
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      style={{
        padding: '10px',
        alignItems: 'center',
      }}
    >
      <Grid item>
        <Image src={Logo} alt='logo' />
      </Grid>
      <Grid item>
        <Typography variant='body1'>Key People Insights</Typography>
      </Grid>
    </Grid>
  )
}
