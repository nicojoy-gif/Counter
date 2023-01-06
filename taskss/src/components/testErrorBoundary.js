import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function TestErrorBoundary() {
  const [val, setVal] = useState(0);

  const handleClick = () => {
    setVal(val + 1);
    if (val === 3) {
      return "Crashed";
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page for testing ErrorBoundary</title>
      </Helmet>
      <h1 onClick={handleClick}>{val}</h1>
    </div>
  );
}

export default TestErrorBoundary;
