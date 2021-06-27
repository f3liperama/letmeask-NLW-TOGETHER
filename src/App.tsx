import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";
import { AdminRoom } from "./pages/AdminRoom/index";

import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
          <AuthContextProvider>
            <GlobalStyle />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/rooms/new" component={NewRoom} />
              <Route exact path="/rooms/:id" component={Room} />
              <Route exact path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
