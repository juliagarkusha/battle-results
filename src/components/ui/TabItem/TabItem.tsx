import React, { FC, ReactElement } from "react";
import Button from '@mui/material/Button';
import "./TabItem.scss";

interface TabItemProps {
  tabText: string;
  setTabHandler: (tabText: string) => void;
  isActiveTab: boolean;
  loading: boolean;
}

const TabItem: FC<TabItemProps> = (props): ReactElement => {
  const {
    tabText,
    setTabHandler,
    isActiveTab,
    loading
  } = props;

  return (
      <Button
          variant="text"
          className={isActiveTab ? 'TabItem active' : 'TabItem'}
          onClick={() => setTabHandler(tabText)}
          disabled={loading}
      >
        {tabText}
      </Button>
  );
}

export default TabItem;

