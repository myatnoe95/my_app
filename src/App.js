
import './App.css';
import SidebarMenu from './components/sidebar';
import MiniDrawer from './components/main';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Route from './routes/route';


function App() {
  return (
    <Router>
      <Route/>
      <MiniDrawer/>
    </Router>
  );
}



export default App;
