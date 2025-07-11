import { BASE_URL,ENTITY,FIELDS } from '../constants/api'

export const getUrl = (type: keyof typeof ENTITY, id: string): string => {
  const url = `${BASE_URL}/${ENTITY[type]}/${id}/?fields=${FIELDS[type]}`;
  console.log("Generated URL:", url);
  return url;
};