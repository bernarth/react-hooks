import React from "react";
import "./Counter.css";

export const CounterWithCustomHook = () => {

    

    return (
        <>
            <h1>Counter with Hook: {0}</h1>
            <hr />
            <button type='button' className='btn btn-success'>+ 1</button>
            <button type='button' className='btn btn-danger'>- 1</button>
        </>
    );
};
