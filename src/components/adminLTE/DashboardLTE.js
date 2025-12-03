import React from "react";
import {Outlet} from "react-router-dom";
import NavbarDash from "./NavbarDash";

function DashboardLTE() {
    return (
        <div className="wrapper">
            <NavbarDash />
            <Outlet />
        </div>
    );
}

export default DashboardLTE;
