import Clockmotto from "./components/Clockmotto";
import Clocktime from "./components/Clocktime";
import "bootstrap/dist/css/bootstrap.min.css";
import Time from "./components/Time";
function App() {
  return (
    <div>
      <center>
        <div>
          <h1 className="fw-bolder">BHARAT CLOCK</h1>
          <Clockmotto />
          <Clocktime />
          <Time></Time>
        </div>
      </center>
    </div>
  );
}

export default App;
