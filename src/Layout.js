export default function Layout(props) {
  return (
    <div style={{ background: "pink", width: "100%", height: "500px" }}>
      {props.children}
    </div>
  );
}
