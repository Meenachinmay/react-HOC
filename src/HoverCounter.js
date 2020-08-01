import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({counter, increaseCounter, resetCounter}) => {

    return (
        <div>
            <button onMouseOver={increaseCounter}>
                Hover me
            </button>
            <button onClick={resetCounter}>
                Reset Hover count
            </button>
            <div>
                <span>
                    {counter}
                </span>
            </div>
        </div>
    )
}

export default withCounter(HoverCounter);