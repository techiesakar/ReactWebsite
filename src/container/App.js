import Home from "../components/pages/Home";
import Layout from "../hoc/layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col gap-24">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
