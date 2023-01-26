//import logo from "./logo.svg";
import "./App.css";
import { CFooter } from "./components/CFooter";
import CHeader from "./components/CHeader";
import CContents from "./components/CContents";

function App() {
  return (
    <div className="App">
      <CHeader aName="Oleksandr" aFamily="Kovtun" />
      <CContents />
      {/* <CFooter weather="deszczowa" temp="13" /> *
      <CFooter weather="śnieżna" temp="-6" /> */}
    </div>
  );
}

export default App;
