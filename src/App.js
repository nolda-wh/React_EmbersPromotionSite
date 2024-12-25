import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import PatchNote from './component/PatchNote';
import './bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import GameIntroPage from './component/GameIntroPage';
import Comment from './component/Comment';
import Guide from './component/Guide';



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/patchnote" element={<PatchNote/>}/>
      <Route path="/intro" element={<GameIntroPage/>}/>
      <Route path="/comment" element={<Comment/>}/>
      <Route path="/guide" element={<Guide/>}/>
    </Routes>
  );
}

export default App;
