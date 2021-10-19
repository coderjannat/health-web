
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import LogAndRegistration from "./components/LogAndRegistration/LogAndRegistration";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Home/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Success from "./components/Home/Success/Success";
import Drugs from "./components/medicines/Drug/Drug";
import BabyCares from "./components/medicines/BabyCares/BabyCares";
import LogPage from "./components/Login/LogPage/LogPage";


import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Home/Shared/Footer/Footer";
import NotFound from "./components/Home/NotFound/NotFond";



function App() {
     return (
          <AuthProvider>
               <BrowserRouter>
                    <Header></Header>
                    <Switch>
                         <Route exact path="/">
                              <Home></Home>
                         </Route>
                         <Route path="/home">
                              <Home></Home>
                         </Route>
                         <Route path="/services/:serviceId">
                              <Services></Services>
                         </Route>
                         <Route path="/success">
                              <Success></Success>
                         </Route>

                         <PrivateRoute path="/aboutus">
                              <AboutUs></AboutUs>
                         </PrivateRoute>

                         <Route path="/drugs">
                              <Drugs></Drugs>
                         </Route>
                         <Route path="/logpage">
                              <LogPage></LogPage>
                         </Route>
                         <Route path="/register">
                              <Register></Register>
                         </Route>
                         <Route path="/babycares">
                              <BabyCares></BabyCares>
                         </Route>
                         <Route path="/loginandregistration">
                              <LogAndRegistration></LogAndRegistration>
                         </Route>
                         <Route path="*">
                              <NotFound></NotFound>
                         </Route>
                    </Switch>
                    <Footer></Footer>
               </BrowserRouter>

          </AuthProvider>



     );
}

export default App;
