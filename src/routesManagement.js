import Paginated from "./pages/Paginated";
import InfiniteQuery from "./pages/InfiniteQuery";
import Todo from "./pages/Todo";
import EmployeeDetails from "./pages/EmployeeDetails";

export const routes = [
  {
    title: "Todos",
    path: "/home",
    component: Todo,
    exact: false,
  },
  {
    title: "Infinite query",
    path: "/infinite-query",
    component: InfiniteQuery,
    exact: false,
  },
  {
    title: "Paginated",
    path: "/paginated",
    component: Paginated,
    exact: false,
  },
  {
    title: "Employee Manager",
    path: "/employee-manager",
    component: EmployeeDetails,
    exact: false,
  },
];
