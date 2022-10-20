import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/navBar";
import Trabalhos from "./Pages/trabalhos";
import Footer from "./Components/footer";
import Login from "./Pages/login";

const RouteSwitch = () => {
  return (
    <>
      <div className="bigBox">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default RouteSwitch;

/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>; */
