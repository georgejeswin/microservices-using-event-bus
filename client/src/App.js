import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="h-full">
      <CreatePost />
      <Posts />
    </div>
  );
}

export default App;
