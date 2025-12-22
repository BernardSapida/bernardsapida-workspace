"use client";

import { useParams } from "next/navigation";
import AppSidebar from "./AppSidebar";
import BusinessPlanSideBar from "./BusinessPlanSidebar";

function Sidebar() {
  const params = useParams();

  if (params.businessPlanId) {
    return <BusinessPlanSideBar />;
  }

  return <AppSidebar />;
}

export default Sidebar;
