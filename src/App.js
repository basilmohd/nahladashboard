
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Analytics from './screens/Analytics';
import Summary from './screens/Summary';
import FileUpload from './screens/FileUpload';
import Overview from './screens/Overview';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App1.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
                    <Sidebar />

        <div className="app-container">
          {/* <div className="sidebar">
            <Sidebar />
          </div> */}
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/fileUpload" element={<FileUpload />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

