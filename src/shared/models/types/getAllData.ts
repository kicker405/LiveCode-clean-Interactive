import { ISite } from "./sites";
import { IWell } from "./wells";
import { IProject } from "./projects";

export interface IGetAllData {
  projects: IProject[],
  sites: ISite[],
  wells: IWell[],
}