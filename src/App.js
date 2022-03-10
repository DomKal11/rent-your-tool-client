import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import ToolEdit from "./pages/ToolEdit";
import EditProfile from "./pages/EditProfile";
import MyTools from "./pages/MyTools";
import AddTool from "./pages/AddTool";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate"; // <== IMPORT
import IsAnon from "./components/IsAnon";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rentify</title>
        <link rel="canonical" href="https://rentyourtools.netlify.app" />
        <meta
          name="description"
          content="Netlify application - rent and borrow tools"
        />
      </Helmet>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/*   UPDATE THE BELOW ROUTES   */}
        <Route path="/tools" element={<Tools />} />

        <Route
          path="/tool/:id"
          element={
            <IsPrivate>
              <ToolDetail />
            </IsPrivate>
          }
        />

        <Route
          path="/tool/:id/edit"
          element={
            <IsPrivate>
              <ToolEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/add-tool"
          element={
            <IsPrivate>
              <AddTool />
            </IsPrivate>
          }
        />

        <Route
          path="/my-tools"
          element={
            <IsPrivate>
              <MyTools />
            </IsPrivate>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <IsPrivate>
              <EditProfile />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
