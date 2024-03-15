import React, {useState} from "react";

function EventHandle() {
    const [inputvalue, setinputvalue] = useState('');
    const [submittedValue, setsubmittedValue] = useState('');

    const handleInput = (event) => {
        setinputvalue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setsubmittedValue(inputvalue);
    }
    
    return(
        <div>
            <input type="text" 
            placeholder="YOUR NAME"
            value={inputvalue}
            onChange={handleInput}/>
            <button onClick={handleSubmit}>SUBMIT</button>

            <p>Value: {inputvalue}</p>
            <p>SUBMITTED VALUE: {submittedValue}</p>
        </div>
        
    )
}

export default EventHandle