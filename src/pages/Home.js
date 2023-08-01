import { Link } from 'react-router-dom';
import Marichka from '../assets/Marichka.jpg';

const Home = () => {
    return (
      <div style={{backgroundImage: `url(${Marichka})`, backgroundSize: 'cover', backgroundPosition: "center", height: 1000 }}>
        <h1 style={{textAlign: 'center', color: 'white'}}>
            Вас вітає Марічка!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to='/chat' style={{textAlign: 'center', textDecoration: 'none', fontSize: 64, border: '2px solid brown', backgroundColor: 'orange'}}>Початимось?</Link> 
        </h1>
        <div style={{ width: 300, textAlign: 'center' }}>
           t
        </div>
        
      </div>
    );
  };
  
  export default Home;