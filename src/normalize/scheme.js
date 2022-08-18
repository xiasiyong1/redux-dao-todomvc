import { schema } from "normalizr";

const TeamSchema = new schema.Entity(
  "team",
  {},
  {
    idAttribute: "uuid",
  }
);
const OrgSchema = new schema.Entity(
  "organization",
  {},
  {
    idAttribute: "uuid",
  }
);

export const scheme1 = new schema.Entity(
  "login_info",
  {
    teams: [TeamSchema],
    org: OrgSchema,
  },
  { idAttribute: "uuid" }
);

const user = new schema.Entity("user");
const comment = new schema.Entity("comment", {
  commenter: user,
});
export const scheme2 = new schema.Entity(
  "article",
  {
    comments: [comment],
    author: user,
  },
  {
    idAttribute: "id",
  }
);

const sidebarSettingMenuScheme = new schema.Entity(
  "sidebar_setting_menu",
  {},
  { idAttribute: "uuid" }
);
export const scheme3 = new schema.Values([sidebarSettingMenuScheme]);
