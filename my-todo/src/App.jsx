import { useState } from 'react';

function TodoItem({ text }) {
  return <li>{text}</li>;
}
// src/App.jsx
export default function App() {
const [todos, setTodos]=useState([]);
const[text,setText]=useState('');
const add=()=>{
  const trimmedText=text.trim();
  if(!trimmedText)return;
  setTodos([...todos,{id:crypto.randomUUID(),text:trimmedText}])
  setText('');
}
return(<div>
  <input value={text} onChange={e=>setText(e.target.value)} />
  <button onClick={add}>追加</button>
  <ul>{todos.map((todo, i)=><li key={todo.id}>{todo.text}</li>)}</ul>
  <p>残り {todos.length}件</p>
</div>);
}
