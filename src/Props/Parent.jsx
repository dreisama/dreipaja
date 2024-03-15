import React from "react";
import ChildComponent from "./Child";

function ParentComponent() {
    const dynamicValue = "Hello World";
    return (
        <div>
            <ChildComponent propName={dynamicValue}/>
        </div>
    )
}

export default ParentComponent