import React, { useState, useCallback, Suspense } from "react";
const Form = React.lazy(() => import("./Form"));
export default function Table() {
  const [showForm, setShowForm] = useState(false);

  const toggleFormDisplay = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm, setShowForm]);
  return (
    <div style={{ width: "100%", height: "200px", outline: "1px solid #000" }}>
      Table
      <button onClick={toggleFormDisplay}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      <Suspense fallback={<div>Loading... </div>}>
        {showForm ? <Form /> : null}
      </Suspense>
    </div>
  );
}
