import "./App.css";
import Lines from "./Components/Lines/Lines";
import Main from "./Components/Main/Main";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="">
      <Lines />
      <div>
        <NavigationBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
