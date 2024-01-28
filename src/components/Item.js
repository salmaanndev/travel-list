import React from 'react'

const Item = ({ items, handleDeleteItem, toggleItems }) => {
    return (
        <li>
            <input type='checkbox' value={items.packed} onChange={()=> toggleItems(items.id)} />
            <span style={items.packed ? { textDecoration: "line-through" } : {}}>
                {items.quantity} {items.desc}
            </span>
            <button onClick={()=>handleDeleteItem(items.id)}>❌</button>
        </li>

    )
}

export default Item
