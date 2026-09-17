import { useState } from 'react';

// src/App.jsx
export default function App() {
const items = ['牛乳を買う', 'レポート提出'];
return (
<ul>
{items.map((todoText, i) => <TodoItem key={i} text={todoText} />)}
</ul>
)
}
function TodoItem({text}){
  return <li>{text}</li>;
}
