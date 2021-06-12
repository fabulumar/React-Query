import Paginated from "./pages/Paginated";
import InfiniteQuery from "./pages/InfiniteQuery";
import Todo from "./pages/Todo";
import EmployeeDetails from "./pages/EmployeeDetails";
import { home, paginated, employeeManager, infiniteQuery } from "./routes";

export const routes = [
  {
    title: "Todos",
    path: home,
    component: Todo,
    exact: false,
  },
  {
    title: "Infinite query",
    path: infiniteQuery,
    component: InfiniteQuery,
    exact: false,
  },
  {
    title: "Paginated",
    path: paginated,
    component: Paginated,
    exact: false,
  },
  {
    title: "Employee Manager",
    path: employeeManager,
    component: EmployeeDetails,
    exact: false,
  },
];
