// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Pages/Home';
import EventDetail from './Pages/EventDetail';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './pages/Dashboard';
// import AllEventsPage from './pages/AllEventsPage';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames="fade"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events/:id" element={<EventDetail />} />
              {/* <Route path="/events" component={AllEventsPage} />  */}
              <Route path="/events/:id/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
