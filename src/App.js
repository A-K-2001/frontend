
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Companylogin from './pages/login/Companylogin';
import Investorlogin from './pages/login/Investorlogin';
import Login from './pages/login/Login';




function App() {
  return (
    <div className="App">
    
      <Header></Header>
      {/* <Login></Login> */}
      {/* <Investorlogin></Investorlogin> */}
      {/* <Companylogin></Companylogin>? */}
      <companyregister/>
      <Footer></Footer>
    </div>
  );
}

export default App;
