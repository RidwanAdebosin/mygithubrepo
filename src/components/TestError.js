import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";

const TestError = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong!");
  }
  return (
    <>
      <Navigation />
      <div className="error-btn">
        <button onClick={() => setError(true)} className="btn error-boundary">
          Test ErrorBoundary
        </button>
      </div>
    </>
  );
};

export default TestError;
