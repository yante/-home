import React from "react";
import Meta from "../components/meta";
import Container from "../components/Container";

export default ({ children }) => {
  return (
    <div>
      <Meta />
      <Container>{children}</Container>
    </div>
  );
};
