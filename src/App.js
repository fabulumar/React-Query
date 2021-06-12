import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import NavigationToggle from "./components/NavigationToggle";
import { routes } from "./routesManagement";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAward,
  faBirthdayCake,
  faCalendar,
  faEnvelope,
  faInbox,
  faLocationArrow,
  faPen,
  faPhoneAlt,
  faTrashAlt,
  faUser,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import IndividualDetails from "./pages/EmployeeDetails/individualDetails";
import { individualDetails } from "./routes";

library.add(
  faPen,
  faTrashAlt,
  faUser,
  faBirthdayCake,
  faPhoneAlt,
  faAward,
  faEnvelope,
  faInbox,
  faLocationArrow,
  faCalendar,
  faAngleLeft
);

const BodyContent = styled.div`
  margin: 80px auto 0px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  transition-property: transform;
`;

function App() {
  const queryClient = new QueryClient();
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationToggle
          onClick={toggleNavigation}
          isNavBarOpen={isNavBarOpen}
        />
        <Router>
          <Navbar
            isOpen={isNavBarOpen}
            onNavLink={() => setIsNavBarOpen(false)}
          />
          <BodyContent isNavBarOpen={isNavBarOpen}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path={individualDetails}>
                <IndividualDetails />
              </Route>
              {routes.length &&
                routes.map((route, index) => (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
            </Switch>
          </BodyContent>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
