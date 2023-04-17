import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        // 3 спосооба стилизации. 1
        style={({ isActive }) =>
          isActive ? { color: 'lightblue', textDecoration: 'none' } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/courses"
      >
        Courses
      </NavLink>

      <NavLink
        // 3 спосооба стилизации. 2й. и

        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/about"
        // 3й способ в App.css
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Menu
