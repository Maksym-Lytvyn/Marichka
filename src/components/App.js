import Notiflix from "notiflix";
import About from "pages/About";
import Home from "pages/Home";
import Chat from "pages/Chat";
import NotFound from "pages/NotFound";
import { Routes, Route, NavLink } from "react-router-dom";


const App = () => {
  Notiflix.Notify.success('Ласкаво просимо!');

  return (
    <div>
      <nav style={{
        backgroundColor: 'purple',
        height: 50
      }}>
        <NavLink to="/" style={{color: 'white', paddingLeft: 750, fontSize: 36, textDecoration: 'none'}}>Home</NavLink>
        <NavLink to="/chat" style={{color: 'white', paddingLeft: 30, fontSize: 36, textDecoration: 'none'}}>Chat</NavLink>
        <NavLink to="/about" style={{color: 'white', paddingLeft: 30, fontSize: 36, textDecoration: 'none'}}>About</NavLink>
      </nav>


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
