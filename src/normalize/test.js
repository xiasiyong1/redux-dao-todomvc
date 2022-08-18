import { normalize, schema } from "normalizr";
import { data1, data2, data3 } from "./data.js";
import { scheme1, scheme2, scheme3 } from "./scheme";

export const testNormlize = () => {
  console.log(normalize(data1, scheme1));
};

export const testNormlize2 = () => {
  console.log("testNormlize2", normalize(data2, scheme2));
};

export const testNormlize3 = () => {
  console.log("testNormlize3", normalize(data3, scheme3));
};
