import React from "react";
import Button from '@mui/material/Button';
import "./TabItem.scss";

const TabItem = (props) => {
  const {
    tabText,
    setTabHandler,
    isActiveTab,
    loading,
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
  )
}

export default TabItem;
