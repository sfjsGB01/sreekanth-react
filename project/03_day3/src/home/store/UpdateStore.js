import React from "react"

function UpdateStore({ store, viewItem }) {

    const [updateMode, setUpdateMode] = React.useState(false)
    const storeNameField = React.useRef()
    const storeOwnerField = React.useRef()

    return <tr>
        <td>{updateMode ?
            <input type="text" defaultValue={store?.store_name}
                size={15} ref={storeNameField} /> :
            store?.store_name}</td>

        <td>{updateMode ?
            <input type="text" defaultValue={store?.store_owner}
                size={15} ref={storeOwnerField} /> :
            store?.store_owner}</td>

        {updateMode ? <td>
            <input type="button" value="Save" />
            &nbsp;
            <input type="button" value="Cancel" onClick={() => {
                setUpdateMode(false)
            }} />
        </td> : <td>
            <input type="button" value="View" onClick={() => {
                viewItem(store)
            }} />
            &nbsp;
            <input type="button" value="Update" onClick={() => {
                setUpdateMode(true)
            }} />
            &nbsp;
            <input type="button" value="Delete" />
        </td>}
    </tr>
}

export default UpdateStore;