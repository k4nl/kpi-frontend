"use client";

import React from 'react'
import { IData, IInitialData } from './dashboard.interfaces'
import HeadCount from '@/components/Charts/HeadCount'
import moment from 'moment';
import Turnover from '@/components/Charts/Turnover';


export default function Dashboard({ data }: { data: IData[] }) {

  if (!data || !data.length) {
    return <div>Nao foram encontrados dados.</div>
  }


  const constructMonths = () => {
    const firstMoment = moment(data[0].data_de_admissao).format('YYYY-MM')
    const lastMoment = moment(data[data.length - 1].data_de_admissao).format('YYYY-MM')
    const months = moment(lastMoment).diff(firstMoment, 'months')
    const initialMonths: IInitialData[] = []
    for (let i = 0; i < months + 1; i++) {
      const findMoment = initialMonths.find(item => item.month === moment(firstMoment).add(i, 'months').format('YYYY-MM'))
      if (!findMoment) {
        initialMonths.push({
          month: moment(firstMoment).add(i, 'months').format('YYYY-MM'),
          monthData: {
            data: {
              start: [],
              end: [],
              inactives: [],
              middle: [],
              average: 0,
            },
          }
        })
      }
    }
    return initialMonths
  }

  const calculateAverage = (data: IInitialData[]) => {
    data.forEach((item) => {
      const average = (item.monthData.data.start.length + item.monthData.data.end.length) / 2
      item.monthData.data.average = average
    })
    return data
  }



  const insertDataIntoMonths = (months: IInitialData[]) => {
    data.forEach((item)=> {
      const admissao = moment(item.data_de_admissao).format('YYYY-MM')
      const rescisao = item.data_de_rescisao ? moment(item.data_de_rescisao).format('YYYY-MM') : null
      const admissaoIndex = months.findIndex(month => month.month === admissao)
      const rescisaoIndex = months.findIndex(month => month.month === rescisao) === -1 ? months.length - 1 : months.findIndex(month => month.month === rescisao)
      for (let i = admissaoIndex; i < rescisaoIndex + 1; i++) {
        if (i === admissaoIndex) {
          months[i].monthData.data.middle.push(item)
        } else {
          months[i].monthData.data.start.push(item)
          if (rescisaoIndex !== i || !rescisao) {
            months[i].monthData.data.end.push(item)
          }
        }
      }
      if (rescisao) {
        months[rescisaoIndex].monthData.data.inactives.push(item)
      }
    })
    return months
  }


  const constructChartData = () => {
    const months = constructMonths()
    const monthsWithData = insertDataIntoMonths(months)
    const monthsWithAverage = calculateAverage(monthsWithData)
    return monthsWithAverage
  }

  return (
    <div className='dashboard-charts'>
      <HeadCount data={constructChartData()} />
      <Turnover data={constructChartData()} />
    </div>
  )
}
