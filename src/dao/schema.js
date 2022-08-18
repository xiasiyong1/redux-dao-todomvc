import { schema } from "normalizr";

export const TodoListScheme = new schema.Entity(
  "todoList",
  {},
  { idAttribute: (value) => value.uuid }
);
