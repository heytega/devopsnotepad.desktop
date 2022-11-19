import React from "react";
import LandingPage from "./Pages/Landing page/LandingPage";
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";


import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Integration from "./Pages/Integration/Integration";
import Faq from './Pages/Faq/Faq';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import CareerPage from './Pages/CareerPage/CareerPage';
import Contact from './Pages/ContactUs/ContactUs';


import classes from './App.module.css'

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role="alert" className={classes.error}>
      <p className={classes.p}>Something went wrong!</p>
      <pre className={classes.pre}>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary} className={classes.button}>Restart app</button>
    </div>
  );
};

function App() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navigation />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/integrations" element={<Integration />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/coming-soon" exact element={<ComingSoon />} />
          <Route path="/career" exact element={<CareerPage />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </React.Fragment>
  );
}

export default App;
