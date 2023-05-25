import React from "react";
import TabItem from "../TabItem";
import "./Tabs.scss";

const Tabs = (props) => {
  const {
    tabs,
    selectedTab,
    setTabHandler,
    loading,
  } = props;

  return (
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          tabText={tab}
          isActiveTab={tab === selectedTab}
          setTabHandler={(tab) => setTabHandler(tab)}
          loading={loading}
        />
      ))}
    </ul>
  )
}

export default Tabs;
