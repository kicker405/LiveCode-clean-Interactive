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

export interface IProject {
  projectId: string;
  projectName: string;
};

export interface ISite {
  siteId: string;
  projectId: string;
  siteName: string;
};

export interface IWell {
  wellId: string;
  siteId: string;
  spudDate:string;
  reason: string;
  wellCommonName: string;
};