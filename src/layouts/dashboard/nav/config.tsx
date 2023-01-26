// component
import Iconify from "components/iconify/Iconify";

// ----------------------------------------------------------------------

const icon = (name: string) => <Iconify icon={`tabler:${name}`} />;
export type TNavItem = {
  title: string;
  path: string;
  info?: string;
  icon?: JSX.Element | any;
  subMenu?: TNavItem[];
};
const navConfig: TNavItem[] = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("layout-dashboard"),
    subMenu: [
      {
        title: "circle chart",
        path: "/dashboard/app/chart",
      },
    ],
  },
  {
    title: "user",
    path: "/dashboard/user",
    icon: icon("layout-dashboard"),
  },
  {
    title: "table",
    path: "/dashboard/table",
    icon: icon("layout-dashboard"),
  },
];

export default navConfig;
