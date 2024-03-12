import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
      <nav class="p-2 ">
        <div class="float-right">
          <form class="flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      </nav>
    </React.Fragment>
  )
}

export default Header