
import './App.css';
import Sidebar from './components/Sidebar' 
import NewPost from './components/NewPost';
import PostsSection from './components/PostsSection';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <NewPost/>
      <PostsSection/>
    </div>
  );
}

export default App;
