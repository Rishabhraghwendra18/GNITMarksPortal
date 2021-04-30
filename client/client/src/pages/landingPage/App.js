import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Toppers from './components/Toppers';
import Login from './components/Login';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Toppers/>
      <Login/>
      <MyProfile/>
    </div>
  );
}

export default App;
