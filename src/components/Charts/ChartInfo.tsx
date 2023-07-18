import React from 'react'
import { IMonthData } from '@/app/dashboard/dashboard.interfaces'
import { Button } from '@mui/material';
import { Grid } from '@mui/material';

export default function ChartInfo({ monthData, setShowInfo }:  {monthData: IMonthData; setShowInfo: (showinfo: boolean) => void; }) {

  if (monthData === null) return;

  const funcionariosAtivos = monthData.data.start.map((item) => item.nome)
  const funcionariosInativos = monthData.data.inactives.map((item) => item.nome)
  const funcionariosContratadosNoMeioDoMes = monthData.data.middle.map((item) => item.nome)

    return (
      <div style={{ marginTop: '30px', backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '10px' }}>
        <Button variant='contained' onClick={() => setShowInfo(false)}>Fechar</Button>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <h3>{` Funcionarios ativos no inicio do mes - ${funcionariosAtivos.length} `}</h3>

            <span>{funcionariosAtivos.join(', ')}</span>
          </Grid>

          <Grid item xs={12} sm={6}>
          <h3>{` Funcionarios inativos final do mes - ${funcionariosInativos.length} `}</h3>
            <span>{funcionariosInativos.join(', ')}</span>
          </Grid>

          <Grid item xs={12} sm={6}>
            <h3>{` Funcionarios contratados no meio do mes - ${funcionariosContratadosNoMeioDoMes.length} `}</h3>
            <span>{funcionariosContratadosNoMeioDoMes.join(', ')}</span>
          </Grid>
          

        </Grid>
      </div>
    )
}
