import React from "react";

const Header = () => {
  const title = "Todo List";

  /* ==================================== */

  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default React.memo(Header);
