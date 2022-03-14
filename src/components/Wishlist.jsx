import React, { useState } from "react";

function Wishlist() {
    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);

    const handleInput = (e) => {
        let value = e.target.value;
        setText(value);
    };
    const handleClick = () => {
        const payload = {
            item: text,
        };
        let newItem = [...arr, payload];
        setArr(newItem);
        // console.log(arr)
    };

    return (
        <>
            <h1>Wishlist</h1>
            {/* <input type="text" onChange={handleInput} placeholder='Your item' /> */}

            {arr.length < 3 ? (
                <input type="text" onChange={handleInput} placeholder="Your item" />
            ) : (
                <p>Max limit reached </p>
            )}
            {arr.length < 3 ? (
                <button onClick={handleClick}>ADD</button>
            ) : (
                <p>You cannot add more than 3 items</p>
            )}
            {arr.map((item) => {
                return <p> {item.item} </p>;
            })}
        </>
    );
}

export default Wishlist;