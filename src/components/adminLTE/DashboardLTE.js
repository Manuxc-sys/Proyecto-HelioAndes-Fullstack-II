import React from "react";
import {Outlet} from "react-router-dom";
import NavbarDash from "./NavbarDash";
import Sidebar from "./Sidebar";

function DashboardLTE() {
    return (
        <div className="wrapper">
            <NavbarDash />
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default DashboardLTE;
