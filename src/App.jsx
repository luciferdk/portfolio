import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './css/App.css'



//use path to route
const Landing = lazy(() => import('./pages/Landing'));
const Work = lazy(() => import('./pages/Work'));
const Experience = lazy(() => import('./pages/Experience'));
const Expertise = lazy(() => import('./pages/Expertise'));



function App() {
  return (
    <div className='parents'>
      < BrowserRouter >
        <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
          <Route path="/Work" element={<Suspense fallback={"loading..."}><Work /></Suspense>} />
          <Route path="/Experience" element={<Suspense fallback={"loading..."}><Experience /></Suspense>} />
          <Route path="/Expertise" element={<Suspense fallback={"loading..."}><Expertise /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};





function AppBar() {
  const navigate = useNavigate();
  return <div className='nav'>
    <div className='nav0'>


      <div className="nav1" onClick={() => {
          navigate("/");
        }}>
        <img src="/logo_title/1123456789.jpeg" alt="img hai baba ji" />
      </div>


      <div className='nav2'>
        <div onClick={() => {
          navigate("/");
        }}><p>// home</p></div>

        <div onClick={() => {
          navigate("/Expertise");
        }}><p>// expertise</p></div>

        <div onClick={() => {
          navigate("/Work");
        }}><p>// work</p></div>

        <div onClick={() => {
          navigate("/Experience");
        }}><p>// experience</p></div>
      </div>


      <div className="nav3">
      
        <GitHubButton />
        <X />
        <Telegram />
        <Instagram />
      </div>
    </div>
  </div>
}


function GitHubButton() {
  const openGitHub = () => {
    window.open('https://github.com/luciferdk?tab=repositories', '_blank'); // Open in new tab
  };
  
  return (
    <div onClick={openGitHub}><div className='IMG1'><i className="fa-brands fa-github"></i></div></div>
  );
}

function X() {
  const X = () => {
    window.open('https://x.com/Dksinha467530', '_blank');
  };
  
  return (
    <div onClick={X}><div className='IMG1'><img src="/logo_title/twitter.png" alt="" /></div></div>
  );
}

function Telegram() {
  const Telegram = () => {
    window.open('https://t.me/@dksinha0', '_blank');
  };

  return (
    <div onClick={Telegram}><div className='IMG1'><i className="fa-brands fa-telegram"></i></div></div>
  );
}

function Instagram() {
  const Instagram = () => {
    window.open('https://www.instagram.com/morning_s.ar/', '_blank');
  };

  return (
    <div onClick={Instagram}><div className='IMG1'><i className="fa-brands fa-instagram"></i></div></div>
  );
}


export default App;
