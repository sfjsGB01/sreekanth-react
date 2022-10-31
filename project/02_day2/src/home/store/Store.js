import React from "react";

import { useNavigate } from "react-router-dom";


import axios from "../../util/axiosSetup"

import AddStore from "./AddStore";
import UpdateStore from "./UpdateStore";

const Store = () => {
  const [error, setError] = React.useState("")
  const [stores, setStores] = React.useState([])
  const [addMode, setAddMode] = React.useState(false)


  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get("stores")
      .then((results) => {
        console.log("results?.data", results?.data)

        setStores(results?.data?.stores)
      }).catch((error) => {
        const message = error?.message

        setError(error?.message)
      })
  }, [])

  const viewItem = (store) => {
    navigate(`/home/item/${store?.store_name}`);
  };

  const add = () => {
    setAddMode(true)
  }

  return (
    <div>
      <h1>Stores</h1>

      <input type="button" value="Add" onClick={add} />

      {addMode && <AddStore setAddMode={setAddMode} />}

      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Owner</th>

            <th>Actions</th>
          </tr>

          {stores.map((store, index) => {
            return (
              <UpdateStore key={store?.store_name} store={store} viewItem={viewItem}></UpdateStore>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Store;
