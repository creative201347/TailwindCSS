import React from "react";

const SidebarIcon = ({ icon, text = "Tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default SidebarIcon;
