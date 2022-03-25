import React from "react";
import usePosts from "./queries/Countries.query";

export default function Header() {
  const { isLoading, error, data } = usePosts();
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        outline: "1px solid #000",
        overflow: "scroll"
      }}
    >
      Header
      {error ? `Error occurred ${error}` : null}
      {isLoading ? "Fetching data" : data.map((d) => d.title).join(",")}
    </div>
  );
}
