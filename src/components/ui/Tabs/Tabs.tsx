import React, {FC, ReactElement } from "react";
import TabItem from "../TabItem";
import "./Tabs.scss";

interface TabsProps {
  tabs: string[];
  selectedTab: string;
  setTabHandler: (tab: string) => void;
  loading: boolean;
}

const Tabs: FC<TabsProps> = (props): ReactElement => {
  const {
    tabs,
    selectedTab,
    setTabHandler,
    loading
  } = props;

  return (
      <ul className="tabs">
        {tabs.map((tab, index) => (
            <TabItem
                key={index}
                tabText={tab}
                isActiveTab={tab === selectedTab}
                setTabHandler={setTabHandler}
                loading={loading}
            />
        ))}
      </ul>
  );
}

export default Tabs;
