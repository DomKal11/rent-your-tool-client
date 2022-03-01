import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon"; 

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
 
        {/*   UPDATE THE BELOW ROUTES   */}
        <Route
          path="/projects"
          element={ <IsPrivate> <ProjectListPage /> </IsPrivate> } 
        />
 
        <Route
          path="/projects/:id"
          element={ <IsPrivate> <ProjectDetailsPage /> </IsPrivate> }
        />
 
        <Route
          path="/projects/edit/:id"
          element={ <IsPrivate> <EditProjectPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
 
      </Routes>
    </div>
  );
}

export default App;
