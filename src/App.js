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
import Paginated from "./pages/Paginated";
import InfiniteQuery from "./pages/InfiniteQuery";
import Mutation from "./pages/Mutation";
import NavigationToggle from "./components/NavigationToggle";

const BodyContent = styled.div`
  margin: 50px auto 0px auto;
  width: 100%;
  max-width: 700px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  transform: ${({ isNavBarOpen }) =>
    isNavBarOpen ? "translateX(20%) scale(0.9)" : "translateX(0%)  scale(1)"};
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
              <Route exact={true} path="/home" component={Paginated} />
              <Route
                exact={true}
                path="/infinite-query"
                component={InfiniteQuery}
              />
              <Route exact={true} path="/mutation" component={Mutation} />
            </Switch>
          </BodyContent>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
