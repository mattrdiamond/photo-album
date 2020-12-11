import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Albums from "./components/Albums/Albums.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Home from "./components/Home/Home.component";
import Photos from "./components/Photos/Photos.component";
import NavBar from "./components/NavBar/NavBar.component";
import "./App.css";

const App = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div id="app">
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="main-window">
        <Sidebar
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={"content-window" + (sidebarOpen ? " sb-open" : "")}
          onClick={() => {
            if (window.innerWidth <= 800 && sidebarOpen) {
              setSidebarOpen(false);
            }
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/albums/:id" component={Albums} />
            <Route exact path="/albums/:id/photos" component={Photos} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
