export type TTooltipStyle = {
  x: number;
  y: number;
  r: number;
  background: string;
  color: string;
};

export interface TToolTipData {
    elementTitle: string
    elementText: string;
    arrowType: string;
    elementId: string;
    styles: TTooltipStyle;
    type: string;
}

export type TPosition = "static" | "relative" | "absolute" | "fixed" | "sticky";

export type TTooltipProps = {
    data: TToolTipData;
}

