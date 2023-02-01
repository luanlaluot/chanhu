// component
import Iconify from "components/iconify/Iconify";

// ----------------------------------------------------------------------

const icon = (name: string) => <Iconify icon={`tabler:${name}`} />; //Base icon : Tabler

type TNavSubChildrenItem = {
  title?: string;
  path?: string;
  level: 1 | 2 | 3;
  children?: TNavSubChildrenItem[];
};
type TNavSubItem = {
  title: string;
  path: string;
  level: 1 | 2 | 3;
  info?: string;
  icon?: JSX.Element | any;
  children?: TNavSubChildrenItem[];
};

export type TNavItem = {
  title: string;
  path: string;
  subMenu?: TNavSubItem[];
};
const navConfig: TNavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    subMenu: [
      {
        icon: icon("layout-dashboard"),
        title: "Chart",
        path: "/dashboard/chart",
        level: 1,
      },
    ],
  },
  {
    title: "Components",
    path: "/components",
    subMenu: [
      {
        icon: icon("layout-dashboard"),
        title: "Table",
        path: "/components/table",
        level: 1,
        children: [
          {
            title: "Basic",
            path: "/components/table/basic",
            level: 2,
          },
          {
            title: "Custom",
            path: "/components/table/custom",
            level: 2,
            children: [
              {
                title: "Tab 1",
                path: "/components/table/custom/tab1",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
              {
                title: "Tab 2",
                path: "/components/table/custom/tab2",
                level: 3,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default navConfig;
