import './Layout.css'
import NavBar from '../NavBar/NavBar'


const Layout = (props) => (
  <>
    <div className='layout'>
      <NavBar user={props.user} />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  </>
)

export default Layout