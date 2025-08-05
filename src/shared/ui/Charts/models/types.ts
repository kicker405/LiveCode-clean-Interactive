export interface IFluctuationsChartData {
  x: number; 
  y1: number; 
  y2: number; 
  y3: number; 
}

export interface IFluctuationsChartProps {
  data: IFluctuationsChartData[]; 
}

export interface IDepthData {
  level: number; 
}

export interface IDepthIndicatorProps {
  value?: number; 
  label?: string; 
  width?: number; 
  height?: number; 
}

export interface IThermometerChartProps {
  value?: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
}