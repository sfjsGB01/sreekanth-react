import React from "react"

import axios from "../../util/axiosSetup"

function AddStore({ setAddMode, saveNewStore }) {
    const [formState, setFormState] = React.useState({ store_owner: "", store_name: "" })

    const textChanged = (e) => {
        setFormState((prevState) => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
    }



    return <form >
        <br />
        <div style={{ border: "1px red solid" }}>
            <br />

            <input type="text" id="store_name" placeholder="Store Name" onChange={textChanged} />
            &nbsp;
            <input type="text" id="store_owner" placeholder="Store Owner" onChange={textChanged} />

            <br /> <br />
            <input type="button" value="Save" onClick={() => saveNewStore(formState)} />
            &nbsp;
            <input type="button" value="Cancel" onClick={() => {
                setAddMode(false)
            }} />

            <br />
            <br /> </div><br />
    </form>
}

export default AddStore