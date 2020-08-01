import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({data, counter, increaseCounter, resetCounter}) => {
    const {name, cast } = data;
    return (
        <div>
            <button onClick={increaseCounter}>Clicked {counter} times</button>
            <button onClick={resetCounter}>Reset click count</button>
            {name} , {cast}
        </div>
    )
}

export default withCounter(ClickCounter);