import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Paginated from "./pages/Paginated";
import InfiniteQuery from "./pages/InfiniteQuery";
import Mutation from "./pages/Mutation";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <h2 className="title">React Query Demo</h2>
          <div className="content-wrapper">
            <Navbar></Navbar>
            <div className="content">
              <Switch>
                <Route exact={true} path="/" component={Paginated} />
                <Route
                  exact={true}
                  path="/infinite-query"
                  component={InfiniteQuery}
                />
                <Route exact={true} path="/mutation" component={Mutation} />
              </Switch>
            </div>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
