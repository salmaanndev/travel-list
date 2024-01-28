import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);


  const handleAddItems = (item) => {
    setItems(items => [...items, item]);
  }

  const handleDeleteItem = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }


  const toggleItems = (id) => {
    setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear list?")
    if (confirmed) {
      setItems([]);
    }

  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList handleClearList={handleClearList} items={items} toggleItems={toggleItems} handleDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;
