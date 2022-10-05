import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
//    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
//      { title }
//    </li>
   <li className="nav-item " >
   <a  onClick={handleClick} className={activeTab === id ? "nav-link active " : ""}  id="" data-toggle="tab" href="#id" role="tab"  aria-selected="true">{title}</a>
    </li>
 );
};
export default TabNavItem;