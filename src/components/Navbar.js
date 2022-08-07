import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const navLinkStyle = ({isActive}) =>  {
    return {
        fontweight : isActive ? 'bold' : 'normal',
        textDecoration : isActive ? 'none' : 'underline'

    }
} 

  const auth = useAuth()

  return (
    <nav className='primary'>
        <NavLink style={navLinkStyle} to="/">
          Home
          </NavLink>
        <NavLink style={navLinkStyle} to="/about">
          About
          </NavLink>
        <NavLink style={navLinkStyle} to="/products">
          Products
          </NavLink>
        <NavLink style={navLinkStyle} to="/profile">
          Profile
          </NavLink>
          { !auth.user && (
            <NavLink style={navLinkStyle} to='/login'>
              Login
            </NavLink>
          )}
    </nav>

  )
}

