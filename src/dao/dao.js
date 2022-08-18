import { getUuid } from "../utils";
import { TODO_STATUS_ENUM } from "../constants/todo";
const mockData = [
  {
    uuid: getUuid(),
    name: "起床",
    completeStatus: TODO_STATUS_ENUM.COMPLETED,
  },
  {
    uuid: getUuid(),
    name: "吃饭",
    completeStatus: TODO_STATUS_ENUM.COMPLETED,
  },
  {
    uuid: getUuid(),
    name: "睡觉",
    completeStatus: TODO_STATUS_ENUM.ACTIVE,
  },
];

export const fetchTodoList = () => {
  return Promise.resolve(mockData);
};
