import { schema } from "normalizr";

export const TodoListScheme = new schema.Entity("todo", {
  idAttribute: (value) => value.uuid,
});
