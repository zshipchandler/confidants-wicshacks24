import { useState } from 'react';
import ForumDisplayCard from './components/ForumDisplayCard/ForumDisplayCard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CircleButton from './components/CircleButton/CircleButton';
import Tag from './components/Tag/Tag';
import { BiHeart, BiPlus, BiMessage } from 'react-icons/bi';
import AddPostModal from './components/AddPostModal/AddPostModal';
function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <ForumDisplayCard title="Title 1" body= "once upon a time i killed this motherfucker"/>
        <CircleButton buttonType={BiHeart}/>
        <CircleButton buttonType={BiPlus} onClick={() => setShow(true)}/>
        <CircleButton buttonType={BiMessage}/>
        <Tag typeName='Tech' bgColor='primary'/>
        <AddPostModal title="Add new post" show={show} onHide={() => setShow(false)}/>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
