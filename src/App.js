import "./styles.css";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";

export default function App() {
  return (
    <div className="App">
      <h1>React Query Pluggin</h1>
      <Layout>
        <Header />
        <Footer />
        <Table />
      </Layout>
    </div>
  );
}
