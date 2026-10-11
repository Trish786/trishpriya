import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: 0 }}>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;