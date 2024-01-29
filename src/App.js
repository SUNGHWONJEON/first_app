import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect'
import HomeView from "./views/HomeView";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <BrowserView>
          데스크톱브라우져!
        </BrowserView>
        <MobileView>
          모바일 브라우져!
        </MobileView>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
