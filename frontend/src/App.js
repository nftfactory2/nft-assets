import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import MarketPlace from './components/MarketPlace';
import Details from './components/viewdetails';
import Profile from './components/Profile';
import LaunchPad from './components/LaunchPad';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='marketplace' element={<MarketPlace />} />
          <Route path='details' element={<Details />} />
          <Route path='profile' element={<Profile />} />
          <Route path='launchpad' element={<LaunchPad />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
