import React from "react";

import { useAuthContext } from "../../hooks/useAuth";

const Header = () => {
  const { setLogin, setBearerToken } = useAuthContext()

  const logout = () => {
    setLogin(false)

    setBearerToken("")
  }

  return <div style={{ marginBottom: 50 }}>
    <h1>Header</h1>

    <input type="button" value="Logout" onClick={logout} />
  </div>;
};

export default Header;
