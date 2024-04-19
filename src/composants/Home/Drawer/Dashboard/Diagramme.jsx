import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './SousTitle';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}


function Chart({getTotalTravauxTermine2022}) {
  const theme = useTheme();
  const data = [
    createData('2019', 0), //nb_travaux/Année
    createData('2020', 0),
    createData('2021', 0),
    createData('2022', Number(getTotalTravauxTermine2022)),
    createData('2023', 0),
    createData('2024', 0),
  ];
   
  return (<>
    <React.Fragment>
      <Title>Statistique global des travaux achevée par an</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden', backgroundColor:'white'}}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 50,
          }}
          xAxis={[
            {
              label: 'Année',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
            },
          ]}
          yAxis={[
            {
              label: 'nombre_travaux',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              max: 100, 
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: true,
              color: theme.palette.success.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
    </>
  );
}

export default Chart