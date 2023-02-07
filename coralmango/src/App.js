// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataTable from './components/DataTable';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
        {/* <Route index element={<Home />} /> */}
        <Route exact path="/DataTable" element={<DataTable />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      
     </Routes>
     </>
  
    // <div className="App">
    //  <LoginPage />
    // </div>
  );
}

export default App;
