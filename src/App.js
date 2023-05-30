
import './App.css';

import Home from './components/Home';
import Profile from './components/Profile';
import {Routes,Route} from "react-router-dom"

import PostsSection from './components/PostsSection';
function App() {
 
  return (
    
    <div className="App">
      <Routes>
       <Route  path="/" element={<Home/>}/>
       <Route  path="/profile" element={<Profile/>}/>
       <Route path="/posts" element={<PostsSection/>}/>
      </Routes>
    
    </div>
   
  );
}

export default App;
