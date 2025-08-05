import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { IFluctuationsChartData, IFluctuationsChartProps } from '../models/types';

let data: IFluctuationsChartData[] = [
  { x: 0, y1: 10, y2: 20, y3: 30 },
  { x: 1, y1: 20, y2: 30, y3: 40 },
  { x: 2, y1: 30, y2: 40, y3: 50 },
];

const FluctuationsChart = () => {
  return (
    <div style={{ width: '100%', height: '400px', paddingTop: '20px' }}>
      <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="y1" stroke="#8884d8" name="Line 1" />
        <Line type="monotone" dataKey="y2" stroke="#82ca9d" name="Line 2" />
        <Line type="monotone" dataKey="y3" stroke="#ffc658" name="Line 3" />
      </LineChart>
    </div>
  );
};

export default FluctuationsChart;