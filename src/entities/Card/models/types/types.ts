export type TCard = {
  siteName?: string;
  wellCommonName: string;
  reason: string;
  spudDate: string;
  projectId?: string;
  wellId: string;
  projectName?: string;
};

export interface ICardProps {
  well:TCard;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}