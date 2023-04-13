import { Axios } from "./@core";
import XMLParser from "react-xml-parser";

export const getAnimals = async () => {
  const url = `${process.env.REACT_APP_API_KEY}/xml/TbAdpWaitAnimalView/1/5/`;
  const data = await Axios({
    method: "get",
    url: url,
  });
  return new XMLParser().parseFromString(data.data);
};
