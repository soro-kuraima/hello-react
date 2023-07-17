import logo from './logo.svg';
import './App.css';
import './Counter';
import Menu from './Menu';
import Images from './Images';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Images></Images>
      <Menu />
      <Images
        src1="https://images.unsplash.com/photo-1689499481542-a1cb5545da17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        src2="https://images.unsplash.com/photo-1689500216081-e12c2580e0df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        width="600"
        height="400"
        theme="abstract"
        format="png"
      />
      <Menu>
        <h1>this</h1>
        <h2>is</h2>
        <h3>part of menu</h3>
        <Images
          src1="https://images.unsplash.com/photo-1689258076810-e5396b586481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          src2="https://images.unsplash.com/photo-1685346062260-b69c35ef5cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Menu>
    </div>
  );
}

export default App;
