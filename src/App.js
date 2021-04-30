import { Select as SelectBox, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(["Roshan", "pratap", "katel"]);
  const { Option } = SelectBox;
  const [selectedValue, setSelectedValue] = useState("")

  
  const onItemChange = (event) => {
    console.log("Clicked", event.target.value)
    setNewItem(event.target.value);
  };
  const addItem = (event) => {
    if (event.keyCode == 13) {
      if (!items.includes(newItem)) {
        setItems([items[0], newItem, ...items.slice(1, items.length)]);
        setSelectedValue(newItem);
        setNewItem("");
      } else {
        setSelectedValue(newItem);
        setNewItem("");
      }
    }
  };

  return (
    <div className="App">
      <SelectBox
        style={{ width: 240 }}
        placeholder="custom dropdown render"
        value={selectedValue}
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <Input
              value={newItem}
              onChange={onItemChange}
              onKeyDown={addItem}
              maxLength={5}
            />
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </SelectBox>
    </div>
  );
}

export default App;
