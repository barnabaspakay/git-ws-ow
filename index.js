import React from 'react'
import { useEffect } from "react";
function index() {

    useEffect(() => {
        fetch
            .then(
                setState(data)
            )
        // component will mount
        return () => {
            //cleanup
            // component will unmount
        }
    }, [third])


    return (
        <div>index</div>
    )
}

export default index