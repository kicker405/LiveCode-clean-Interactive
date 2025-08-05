import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IDepthData, IDepthIndicatorProps } from '../models/types';


  const mockData = [
    { timestamp: '00:30', level: 60 },
  ];

const DepthChart = ({ value, label, width = 400, height = 200 }: IDepthIndicatorProps) => {
  //const data: IDepthData[] = [{ level: value }];

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      {"Глубина"}
      <div style={{ textAlign: 'center', color: 'white', fontSize: '26px', fontWeight: 'bold', marginBottom: '10px' }}>
        {label}
      </div>

      <ResponsiveContainer width="100%" height={height - 50}>
        <BarChart
          data={mockData}
          layout="vertical" 
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="level" />
          <Tooltip />
          <Legend />

          <Bar dataKey="level" fill="#82ca9d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepthChart;