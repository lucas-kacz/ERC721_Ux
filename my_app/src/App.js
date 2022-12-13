import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Routes";
import "./index.css";

function App() {
return (
      <Router>
        <AppRoutes/>
      </Router>
  );
}

export default App;
