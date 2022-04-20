
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
import { useSelector } from 'react-redux';
import Otp from './pages/otp/Otp';
import { Investorprofile } from './pages/profile/Investorprofile';
import Comapanyprofile from './pages/profile/Comapanyprofile';
import Company from './pages/profile/Company';
import Profile from './pages/OwnProfile/Profile';





function App() {


  
  const user = useSelector(state => state.user.currentUser);
  const type = useSelector(state=>state.user.type);


  return (


    <div className="App">

      <Header></Header>
      <Routes>
         <Route path="/" element={<Home/>} />
       
        <Route path="/login" element={user?<Home/>:<Login />} />
        <Route path="/login/investor" element={user?<Home/>:<Investorlogin />} />
        <Route path="/login/company" element={user?<Home/>:<Companylogin />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/register/company" element={<Companyregister />} />
        <Route path="companyprofile/:id" element={<Company />} />
        <Route path="investorprofile/:id" element={<Investorprofile />} />
        <Route path="/profile" element={<Profile />} />



        <Route path="/register/investor" element={<Investorregister />} />
        <Route path="/chat" element={<Chat></Chat>}/>
        <Route path="/otp" element={<Otp></Otp>}/>
        <Route path="/profile" element={type=="in"?<Investorprofile/>:<Comapanyprofile/> }/>



        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
