"use client";
import React, { useState } from 'react'
import { IInitialData } from '@/app/dashboard/dashboard.interfaces'
import { ResponsiveLine } from '@nivo/line'
import moment from 'moment'
import Switch  from '@mui/material/Switch';
import ChartInfo from './ChartInfo';


export default function Turnover({ data = [] }: { data: IInitialData[] }) {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [chartInfo, setChartInfo] = useState<any>(null)

  if (!data || !data.length) return (<div>Nao foram encontrados dados.</div>)

  const verifyAverageAndInactives = (average: number, inactives: number) => {
    if (average) {
      return inactives / average
    }
    return 0
  }

  const chartData = () => {
    const chartData = data.map((item) => {
      return {
        x: moment(item.month, 'YYYY/MM').format('MM/YYYY'),
        y: verifyAverageAndInactives(item.monthData.data.average, item.monthData.data.inactives.length),
      }
    })
    return {
      id: 'Head Count',
      color: "hsl(62, 70%, 50%)",
      data: chartData,
    }
  }

  const constructChartInfo = (index: number) => {
    const chartData = data[index] || { monthData: null }
    return (
      <ChartInfo monthData={chartData.monthData} setShowInfo={setShowInfo} />
    )
  }


  return (
    <div style={{ marginTop: '50px', marginBottom: '50px'}}>
      <h2 style={{ color: '#f1f1f1', margin: '20px' }}>TURNOVER</h2>
      <h4 style={{ color: '#f1f1f1', margin: '10px 20px' }}>
        Mostrar informacoes adicionais?
        <Switch onChange={() => setShowInfo(!showInfo)} checked={showInfo}/>
      </h4>
      <div style={{  width: '100%', height: '300px', backgroundColor: '#ffffff', borderRadius: '10px'}}>
        <ResponsiveLine
          data={[chartData()]}
          margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'quantidade de funcionarios',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          tooltip={(e) => {
            setChartInfo(e.point.index)
            return e.point.data.yFormatted;
          }}
        />
      </div>
      {
        showInfo ? (
          <div>
            {
              constructChartInfo(chartInfo)
            }
          </div>
        ) : null
      }
    </div>
  )
}
