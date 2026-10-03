import { useState } from 'react';
export default function List() {
const [todos, setTodos] = useState([]);
const [text, setText] = useState('');
const add = () => {
if (!text.trim()) return;
setTodos(prev => [...prev, { id: crypto.randomUUID(), text, done:false }]);
setText('');
};
function toggle(id){
  setTodos(prev => prev.map(t =>
t.id === id ? { ...t, done: !t.done } : t
));}
// const remaining = todos.filter(t => !t.done).length;
return (<>
  <input value={text} onChange={e=>setText(e.target.value)} />
  <button onClick={add}>追加</button>
  <ul>{todos.map((todo)=><li key={todo.id} onClick={()=>toggle(todo.id)}>{console.log(typeof todo.id)}{todo.done===true ?"☑":"□"}{todo.text}</li>)}</ul>
  <p>残り {todos.length}件</p>
</>);
}