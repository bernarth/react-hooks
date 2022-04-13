import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './Counter.css';

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter( 1 );

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />
            <button onClick={ () => increment() } type='button' className='btn btn-success'>+ 1</button>
            <button onClick={ reset } type='button' className='btn btn-primary'>reset</button>
            <button onClick={ () => decrement() } type='button' className='btn btn-danger'>- 1</button>
        </>
    );
};
