import usePosts from "./queries/Countries.query";

export default function Footer() {
  const { isLoading, error, data } = usePosts();
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        outline: "1px solid #000",
        overflow: "scroll"
      }}
    >
      Footer
      {error ? `Error occurred ${error}` : null}
      {isLoading ? "Fetching data" : data.map((d) => d.title).join(",")}
    </div>
  );
}
