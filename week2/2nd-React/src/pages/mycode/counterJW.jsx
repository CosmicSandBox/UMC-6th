import React, { useState } from 'react';

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        console.log("1증가버튼 눌림");
        setNum(num + 1);
    }

    const decrement = () => {
        console.log("1감소버튼 눌림");
        setNum(num - 1);
    }

    return (
        <div>
            <div className="num">{num}</div>
            <button className="plus" onClick={increment}>+</button>
            <button className="minus" onClick={decrement}>-</button>
        </div>

    );

}

export default Counter;