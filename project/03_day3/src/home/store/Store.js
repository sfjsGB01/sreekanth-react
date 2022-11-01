import React from "react";

import { useNavigate } from "react-router-dom";


import axios from "../../util/axiosSetup"
import { useAuthContext } from "../../hooks/useAuth"

import AddStore from "./AddStore";
import UpdateStore from "./UpdateStore";

const Store = () => {
  const [error, setError] = React.useState("")
  const [stores, setStores] = React.useState([])
  const [addMode, setAddMode] = React.useState(false)


  const navigate = useNavigate();
  const { bearerToken } = useAuthContext()

  React.useEffect(() => {
    getStores()
  }, [])

  const getStores = () => {
    axios.get("stores")
      .then((results) => {

        setStores(results?.data?.stores)
      }).catch((error) => {
        const message = error?.message

        setError(error?.message)
      })
  }

  const viewItem = (store) => {
    navigate(`/home/item/${store?.store_name}`);
  };

  const add = () => {
    setAddMode(true)
  }

  const saveNewStore = (formState) => {
    axios.post(`store/${formState?.store_name}`, {
      ...formState
    }, {
      headers: {
        'Authorization': bearerToken,
        'Content-Type': 'application/json'
      },
    })
      .then((results) => {
        getStores()
        console.log(results?.data)
      }).catch((error) => {
        const message = error?.message

        console.log(error?.message)
      })
  }

  return (
    <div>
      <h1>Stores</h1>

      <input type="button" value="Add" onClick={add} />

      {addMode && <AddStore setAddMode={setAddMode} saveNewStore={saveNewStore} />}

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
