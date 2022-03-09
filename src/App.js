import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import ToolEdit from "./pages/ToolEdit";
import MyTools from "./pages/MyTools";
import AddTool from "./pages/AddTool";
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
          path="/tools"
          element={ <Tools /> } 
        />

        <Route
          path="/tool/:id"
          element={ <IsPrivate> <ToolDetail /> </IsPrivate> } 
        />

        <Route
          path="/tool/:id/edit"
          element={ <IsPrivate> <ToolEdit /> </IsPrivate> } 
        />


        <Route
          path="/add-tool"
          element={ <IsPrivate> <AddTool /> </IsPrivate> } 
        />

        <Route
          path="/my-tools"
          element={ <IsPrivate> <MyTools /> </IsPrivate> } 
        />

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
