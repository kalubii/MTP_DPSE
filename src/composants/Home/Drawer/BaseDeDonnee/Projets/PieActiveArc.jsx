import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useMemo } from 'react';


export default function PieActiveArc({nbTravaux,enCours,resilie,phasePPM,aDemarrer,SetShowTableHead,dateSelectedIndex, regionSearch, axeSearch, pkDebutSearch, pkFinSearch}) {
    const [dataSituation, setDataSituation] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
          try {
            if (dateSelectedIndex || regionSearch || axeSearch || pkDebutSearch || pkFinSearch) {
              const response = await axios.get('http://localhost:8081/situation', {
                params: {
                 date : dateSelectedIndex,
                 region: regionSearch,
                 axe: axeSearch,
                 pkDebut: pkDebutSearch,
                 pkFin: pkFinSearch,
                },
              });
              setDataSituation(response.data);
            }
          } catch (error) {
            console.error('', error);
          }
        };
        fetchSearchResults();
     }, [dateSelectedIndex,regionSearch, axeSearch, pkDebutSearch, pkFinSearch]);

         const data = [
            { id: 0, value: nbTravaux, label: 'Termine' },
            { id: 1, value: enCours, label: 'En Cours' },
            { id: 2, value: resilie, label: 'Resilié' },
            { id: 3, value: phasePPM, label: 'En phase PPM' },
            { id: 4, value: aDemarrer, label: 'A Demarrer' },
        ];

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}