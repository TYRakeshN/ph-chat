import React from "react";
import Search from "./Search";
import "../assets/css/style.css";
import NavigationBar from "./NavigationBar";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <NavigationBar isLog={true} />
        <Search  />
      </>
    );
  }
}

export default Dashboard;
