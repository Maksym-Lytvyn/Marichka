import Wallpaper from '../assets/chat_wallpaper.jpg';

const Chat = () => {
  
    return (
      <div style={{backgroundImage: `url(${Wallpaper})`, backgroundSize: 'cover', backgroundPosition: "center", height: 1000, paddingTop: 20}}>
        <div style={{border: '2px solid white', borderRadius: 15, height: 980, color: 'white'}}>
            <div>
                <p>Привіт</p> 
            </div>

        <form style={{marginTop: 900 }}>
            <input style={{width: 1800, height: 30, marginLeft: 5 }}/>
            <button style={{backgroundColor: 'purple', color: 'white', height: 40, marginLeft: 5}}>Надіслати</button>
        </form>
        </div>
        
      </div>
    );
  };
  
  export default Chat;