import React from "react"

function AddStore({ setAddMode }) {
    return <form >
        <br />
        <div style={{ border: "1px red solid" }}>
            <br />

            <input type="text" placeholder="Store Name" />
            &nbsp;
            <input type="text" placeholder="Store Owner" />

            <br /> <br />
            <input type="button" value="Save" />
            &nbsp;
            <input type="button" value="Cancel" onClick={() => {
                setAddMode(false)
            }} />

            <br />
            <br /> </div><br />
    </form>
}

export default AddStore