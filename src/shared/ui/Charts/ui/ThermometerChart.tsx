import React from 'react';
import { ReferenceLine, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IThermometerChartProps } from '../models/types';

const ThermometerChart = ({ value, min, max, width = 400, height = 300 }: IThermometerChartProps) => {
  // Создаем массив данных на основе текущего значения
  const data = [{ level: value || 0 }];

  min = min || -10; // Значение по умолчанию для минимума
  max = max || 110; // Значение по умолчанию для максимума

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Температура
      </div>

      <ResponsiveContainer width="100%" height={height - 50}>
        <BarChart
          data={data} // Передаем массив данных
          layout="vertical" // Вертикальная ориентация
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[min, max]} />
          <YAxis type="category" dataKey="level" hide />
          <Tooltip />

          {/* Бар для текущего значения */}
          <Bar dataKey="level" fill="#82ca9d" barSize={20} />

          {/* Цветовые отметки */}
          <ReferenceLine x={60} stroke="orange" label="Критическая точка" />
          <ReferenceLine x={-10} stroke="blue" label="Нижний порог" />
          <ReferenceLine x={value} stroke="red" label="Текущая температура" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThermometerChart;