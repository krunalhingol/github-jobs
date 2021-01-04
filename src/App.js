import Header from "./components/Header";
import "./App.css";
import JobBoard from "./JobBoard";

function App() {
  return (
    <div className="github-jobs bg-color-light-grey">
      <Header />
      <JobBoard />
    </div>
  );
}

export default App;
