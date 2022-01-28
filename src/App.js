import "./App.css";
import { ClaimContainer } from "./container/claim/ClaimContainer";
import { SideNavContainer } from "./container/sidenav/SideNavContainer";

function App() {
  return (
    <div className="app-container">
      <SideNavContainer />
      <ClaimContainer />
    </div>
  );
}

export default App;
