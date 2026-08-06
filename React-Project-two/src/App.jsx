import UserCard from "./components/UserCard";
import './App.css'
import Lilyimage from './assets/Lilyimage.jpg'
import Roseimage from './assets/Roseimage.jpg'
import Tulipimage from './assets/Tulipimage.jpg'
function App() {
  return (
    <div className="container ">
      <UserCard name="Love Rana" discr="Lily Flower" image={Lilyimage} style={{"border-radius":"20px"}}/>
      <UserCard name= "Maharana Pratap" discr="Rose Flower" image={Roseimage} style={{"border-radius":"20px"}}/>
      <UserCard name= "Rana Pratap" discr="Tulip Flower" image={Tulipimage} style={{"border-radius":"20px"}}/>
      
      
    </div>
  );
}

export default App;