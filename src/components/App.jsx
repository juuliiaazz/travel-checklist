import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // Lift up state: När flera child components behöver åtkomst till samma state så flyttar vi upp det till deras parent-component
  const [items, setItems] = useState([]);

  // Lägga till saker i listan
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Ta bort saker ur listan
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="main-div">
      <div className="main-row">
        <div className="main-card">
          <Logo />
          <Form onAddItems={handleAddItems} />
          <PackingList
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onClearList={handleClearList}
          />
          <Stats items={items} />
        </div>
      </div>
    </div>
  );
}
