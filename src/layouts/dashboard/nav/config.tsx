// component
// import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

// const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const icon = (name: string) => null;
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
    icon: icon("ic_analytics"),
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
    icon: icon("ic_user"),
  },
  {
    title: "table",
    path: "/dashboard/table",
    icon: icon("ic_cart"),
  },
];

export default navConfig;
