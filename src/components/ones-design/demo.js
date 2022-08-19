import { Button, Space, Divider } from "@ones-design/core";
import User from "@ones-design/user";
import {
  IssueSquareFilled,
  AppStoreSquareFilled,
  AndroidSquareFilled,
  AddFilled,
} from "@ones-design/icons";
import Filter from "@ones-design/filter";

function OnesDesinDemo() {
  return (
    <div>
      <Button block>登陆</Button>
      <div>
        <Button type="primary">登陆</Button>
      </div>
      <Button>登陆</Button>
      <div>
        <Button.Group>
          <Button type="danger">prev</Button>
          <Button type="ghost">next</Button>
        </Button.Group>
      </div>
      <div>
        <Space
          align="center"
          direction="horizontal"
          size="xs"
          split={<Divider type="vertical" />}
        >
          <Button>按钮</Button>
          <span>间距</span>
          <AddFilled />
        </Space>
      </div>
      <User.Select
        filterOption={function noRefCheck() {}}
        mode="multiple"
        options={[
          {
            label: "选项组",
            options: [
              {
                label: "富兰克林",
                value: "franklin",
              },
            ],
          },
          {
            help: "用户分组的提示信息",
            key: "user",
            label: "用户",
            options: [
              {
                avatar: "https://dl3.ones.ai/FnSQg407UzYCFPKRB8F4ONCPVCKt",
                description: "caimingjin@ones.ai",
                label:
                  "用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1",
                title: "请给选项加 title，若无 title 将默认使用 label",
                value: "4n9rqe5k",
              },
              {
                avatar: "https://dl3.ones.ai/FjZ5MORpA34BtQq3snfYy9vXoShG",
                description: "cenxingman@ones.ai",
                disabled: true,
                label: "用户2",
                value: "4TzGDZiW",
              },
              {
                avatar: "https://dl3.ones.ai/FiSe8jbWi71jtWMG4vXqgtXKfqho",
                description: "changlei@ones.ai",
                label: "用户3",
                value: "98beJbeh",
              },
              {
                avatar: "https://dl3.ones.ai/FhEqES8KrpieYr5EadWQZ2oqon4N",
                description: "chenjiaji@ones.ai",
                label: "用户4",
                value: "FFpmuURA",
              },
              {
                avatar: "https://dl3.ones.ai/Fj7RAupgkS4QX2wnMQfi1ADi4hSJ",
                description: "chenyuan1@ones.ai",
                label: "用户5",
                value: "USUScEqz",
              },
              {
                avatar: "https://dl3.ones.ai/FiUXf3fwDMPkDJpyvP3aSek42SRT",
                description: "dongzhengxuan@ones.ai",
                label: "用户6",
                value: "FowxE7kU",
              },
              {
                avatar: "https://dl3.ones.ai/Fq-ztCf2KBTQAqXtUDAPw1F7fJSe",
                description: "dushengjun@ones.ai",
                label: "用户7",
                value: "DgdrtjQH",
              },
              {
                avatar: "https://dl3.ones.ai/FnJ7PZNwn33Oe3IelZLv2p8dh0wV",
                description: "duweibo@ones.ai",
                label: "用户8",
                value: "PG9jkKon",
              },
              {
                avatar: "https://dl3.ones.ai/FhmLfaJLrcmYrGElpPMM3qKhxDT3",
                description: "duxiying@ones.ai",
                label: "用户9",
                value: "PUthCii8",
              },
              {
                avatar: "https://dl3.ones.ai/FpYbVnXxdEt7S6GrqGsLhdzaYRnF",
                description: "fangzhiheng@ones.ai",
                label: "用户10",
                value: "9eTpLRF6",
              },
              {
                avatar: "https://dl3.ones.ai/FsHJzmG9gho5ZpmNGkWXaXcZeNNJ",
                description: "fengbin@ones.ai",
                label: "用户11",
                value: "YEL8b4LV",
              },
              {
                avatar: "https://dl3.ones.ai/FgdUQlbFJ_4-8J44s7Lpup_GN8gy",
                description: "fengcan@ones.ai",
                label: "用户12",
                value: "WLvdYRT9",
              },
              {
                avatar: "https://dl3.ones.ai/FmHvmVlhDdZMXPdyLgXpV-X05Ctu",
                description: "fengzhouning@ones.ai",
                label: "用户13",
                value: "2tFZ39TT",
              },
            ],
          },
          {
            key: "group",
            label: "用户组",
            loading: true,
            options: undefined,
          },
          {
            key: "empty",
            label: "部门",
            notFoundContent: "暂无数据",
            options: undefined,
          },
        ]}
        placeholder="User.Select"
      />
      <Filter
        onChange={function noRefCheck() {}}
        options={[
          {
            data: [
              {
                label: "未开始",
                value: "not-start",
              },
              {
                label: "进行中",
                value: "progress",
              },
              {
                label: "已结束",
                value: "over",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "状态",
              value: "field001",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                label: "选项001",
                value: "item001",
              },
              {
                label: "选项002",
                value: "item002",
              },
              {
                label: "选项003",
                value: "item003",
              },
              {
                label: "选项004",
                value: "item004",
              },
              {
                label: "选项005",
                value: "item005",
              },
              {
                label: "选项006",
                value: "item006",
              },
              {
                label: "选项007",
                value: "item007",
              },
              {
                label: "选项008",
                value: "item008",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "状态类型",
              value: "field002",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                help: "用户分组的提示信息",
                key: "user",
                label: "用户",
                options: [
                  {
                    avatar: "https://dl3.ones.ai/FnSQg407UzYCFPKRB8F4ONCPVCKt",
                    description: "caimingjin@ones.ai",
                    label:
                      "用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1用户1",
                    title: "请给选项加 title，若无 title 将默认使用 label",
                    value: "4n9rqe5k",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FjZ5MORpA34BtQq3snfYy9vXoShG",
                    description: "cenxingman@ones.ai",
                    disabled: true,
                    label: "用户2",
                    value: "4TzGDZiW",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FiSe8jbWi71jtWMG4vXqgtXKfqho",
                    description: "changlei@ones.ai",
                    label: "用户3",
                    value: "98beJbeh",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FhEqES8KrpieYr5EadWQZ2oqon4N",
                    description: "chenjiaji@ones.ai",
                    label: "用户4",
                    value: "FFpmuURA",
                  },
                  {
                    avatar: "https://dl3.ones.ai/Fj7RAupgkS4QX2wnMQfi1ADi4hSJ",
                    description: "chenyuan1@ones.ai",
                    label: "用户5",
                    value: "USUScEqz",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FiUXf3fwDMPkDJpyvP3aSek42SRT",
                    description: "dongzhengxuan@ones.ai",
                    label: "用户6",
                    value: "FowxE7kU",
                  },
                  {
                    avatar: "https://dl3.ones.ai/Fq-ztCf2KBTQAqXtUDAPw1F7fJSe",
                    description: "dushengjun@ones.ai",
                    label: "用户7",
                    value: "DgdrtjQH",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FnJ7PZNwn33Oe3IelZLv2p8dh0wV",
                    description: "duweibo@ones.ai",
                    label: "用户8",
                    value: "PG9jkKon",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FhmLfaJLrcmYrGElpPMM3qKhxDT3",
                    description: "duxiying@ones.ai",
                    label: "用户9",
                    value: "PUthCii8",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FpYbVnXxdEt7S6GrqGsLhdzaYRnF",
                    description: "fangzhiheng@ones.ai",
                    label: "用户10",
                    value: "9eTpLRF6",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FsHJzmG9gho5ZpmNGkWXaXcZeNNJ",
                    description: "fengbin@ones.ai",
                    label: "用户11",
                    value: "YEL8b4LV",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FgdUQlbFJ_4-8J44s7Lpup_GN8gy",
                    description: "fengcan@ones.ai",
                    label: "用户12",
                    value: "WLvdYRT9",
                  },
                  {
                    avatar: "https://dl3.ones.ai/FmHvmVlhDdZMXPdyLgXpV-X05Ctu",
                    description: "fengzhouning@ones.ai",
                    label: "用户13",
                    value: "2tFZ39TT",
                  },
                ],
              },
              {
                key: "group",
                label: "用户组",
                loading: true,
                options: undefined,
              },
              {
                key: "empty",
                label: "部门",
                notFoundContent: "暂无数据",
                options: undefined,
              },
            ],
            item: {
              fieldType: "USER_SELECT",
              label: "创建者",
              value: "field003",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                label: "选项001",
                value: "item001",
              },
              {
                label: "选项002",
                value: "item002",
              },
              {
                label: "选项003",
                value: "item003",
              },
              {
                label: "选项004",
                value: "item004",
              },
              {
                label: "选项005",
                value: "item005",
              },
              {
                label: "选项006",
                value: "item006",
              },
              {
                label: "选项007",
                value: "item007",
              },
              {
                label: "选项008",
                value: "item008",
              },
              {
                label: "选项009",
                value: "item009",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "优先级",
              value: "field004",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                help: "用户分组的提示信息",
                key: "user",
                label: "用户",
                options: "[Circular]",
              },
              {
                key: "group",
                label: "用户组",
                loading: true,
                options: undefined,
              },
              {
                key: "empty",
                label: "部门",
                notFoundContent: "暂无数据",
                options: undefined,
              },
            ],
            item: {
              fieldType: "USER_SELECT",
              label: "负责人",
              value: "field005",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                // icon: <AndroidSquareFilled />,
                label: "选项001",
                value: "item001",
              },
              {
                icon: <AppStoreSquareFilled />,
                label: "选项002",
                value: "item002",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项003",
                value: "item003",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项004",
                value: "item004",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项005",
                value: "item005",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项006",
                value: "item006",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项007",
                value: "item007",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项008",
                value: "item008",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项009",
                value: "item009",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "工作项类型",
              value: "field006",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                icon: <AndroidSquareFilled />,
                label: "选项001",
                value: "item001",
              },
              {
                icon: <AppStoreSquareFilled />,
                label: "选项002",
                value: "item002",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项003",
                value: "item003",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项004",
                value: "item004",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项005",
                value: "item005",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项006",
                value: "item006",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项007",
                value: "item007",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项008",
                value: "item008",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项009",
                value: "item009",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "子工作项类型",
              value: "field007",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            data: [
              {
                icon: <AndroidSquareFilled />,
                label: "选项001",
                value: "item001",
              },
              {
                icon: <AppStoreSquareFilled />,
                label: "选项002",
                value: "item002",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项003",
                value: "item003",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项004",
                value: "item004",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项005",
                value: "item005",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项006",
                value: "item006",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项007",
                value: "item007",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项008",
                value: "item008",
              },
              {
                icon: <IssueSquareFilled />,
                label: "选项009",
                value: "item009",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "工作项类型(自定义选项)",
              operate: {
                defaultOption: "in",
                options: ["in"],
              },
              value: "field008",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
          {
            autoSwitch: false,
            data: [
              {
                label: "未开始",
                value: "not-start",
              },
              {
                label: "进行中",
                value: "progress",
              },
              {
                label: "已结束",
                value: "over",
              },
            ],
            item: {
              fieldType: "SELECT",
              label: "状态(强制选择框显示)",
              value: "field009",
            },
            onDropdownVisibleChange: function noRefCheck() {},
            onSearch: function noRefCheck() {},
          },
        ]}
        value={[
          {
            field: "field001",
            operateType: "not_in",
            value: ["progress"],
          },
          {
            field: "field008",
          },
          {
            field: "field009",
          },
          {
            field: "field006",
            operateType: "not_in",
            value: ["item001", "item002", "item003"],
          },
          {
            field: "field003",
            operateType: "not_in",
            value: ["4n9rqe5k"],
          },
        ]}
      />
    </div>
  );
}

export default OnesDesinDemo;
