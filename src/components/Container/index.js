import React from "react";

export default ({ children }) => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
      {children}
    </div>
  );
};
