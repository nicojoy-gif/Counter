import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/App.css";

function ErrorPage() {
  return (
    <div className="err-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error Page</title>
      </Helmet>
      <h1>404 Error</h1>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default ErrorPage;
