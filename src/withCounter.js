import React, { useState } from 'react';

export default (OriginalComponent) => {
    // here is adding the additional functionality to the originalComponent as newComponent
    const NewComponent = ({data}) => {

        const [counter, setCounter] = useState(0);

        const increaseCounter = () => {
            setCounter(counter + 1);
        }

        const resetCounter = () => {
            setCounter(0);
        }

        return (
            // if you want to pass some props to original component pass them here in original component
            // here again you have to get the data props and then again pass them to the original component
            <OriginalComponent data={data} increaseCounter={increaseCounter} counter={counter} resetCounter={resetCounter}/>
        )
    }
    // here is returning the enhanced component
    return NewComponent;
}