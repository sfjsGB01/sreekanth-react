import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function LegalPagesLayout() {
  return (
    <div>
      <Link to='/legal/terms'>Terms &amp; Conditions</Link> &nbsp;&nbsp;
      <Link to='/legal/privacy'>Privacy Policy</Link>
      {/* Shared layout rendering outlet */}
      <Outlet />
    </div>
  )
}

export default LegalPagesLayout
