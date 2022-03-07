
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Companylogin from './pages/login/Companylogin';
import Investorlogin from './pages/login/Investorlogin';
import Login from './pages/login/Login';
import Companyregister from './pages/register/Companyregister';
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/register/Register';
import Investorregister from './pages/register/Investorregister';
import Home from './pages/homepage/Home';
import Chat from './pages/chat/Chat';





function App() {
  
  const user = true

  return (


    <div className="App">

      <Header></Header>
      <Routes>
         <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/login/investor" element={<Investorlogin />} />
        <Route path="/login/company" element={<Companylogin />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/register/company" element={<Companyregister />} />
        <Route path="/register/investor" element={<Investorregister />} />
        <Route path="/chat" element={<Chat></Chat>}/>


        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
