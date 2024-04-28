import React, { Suspense, lazy, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/Home-page';
import NeedsHelps from './pages/needs-help/NeedsHelps';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
import { ProfileWho } from './pages/personalCabinetWhoHelp/ProfileWho';
import Settings from './pages/personalCabinetWhoHelp/settings/Settings';
import History from './pages/personalCabinetWhoHelp/history/History';
import Password from './components/editPassword/Password';
import { ProfileHelp } from './pages/personalCabinetWhoHelp/ProfileHelp';
 
function App() {
  const [count, setCount] = useState(0); // State for demonstration purposes
  const profileRoutes = lazy(() => import('.//pages/personalCabinetWhoHelp/settings/Settings'));
  return (
    <div>
      <Routes>

        <Route path="/" element={<DefaultLayout />}  >
          <Route index element={<HomePage />} />
          <Route path="needs" element={<NeedsHelps />} />
          <Route path="reg" element={<Register />} />
          <Route path="log" element={<Login />} />

          <Route path="profile" element={<ProfileWho />}> 
          <Route index element={<Settings />}  />
          <Route path="/profile/history" element={<History />} />
          <Route path="/profile/password" element={<Password />} />
          
          </Route>
          <Route path="profileHelp" element={<ProfileHelp/>}> 
          <Route index element={<Settings />}  />
          <Route path="/profileHelp/history" element={<History />} />
          <Route path="/profileHelp/password" element={<Password />} />
          
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
