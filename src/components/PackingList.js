import React, { useState } from 'react'
import Item from './Item';


const PackingList = ({ items, toggleItems, handleDeleteItem, handleClearList }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }

    if (sortBy === "description") 
    {
        sortedItems = items.slice().sort((a,b)=> a.desc.localeCompare(b.desc));
    }

    if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a,b)=> Number(a.packed)- Number(b.packed)); 
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => {
                    return <Item key={item.id} toggleItems={toggleItems} items={item} handleDeleteItem={handleDeleteItem} />
                })}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by Packed Status</option>
                </select>
                <button onClick={()=>handleClearList()}>Clear List</button>
            </div>
        </div>

    )
}

export default PackingList
