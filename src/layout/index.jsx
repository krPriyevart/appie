import Navbar from "./navbar";
import Footer from "./footer";
import {BeakerIcon, beakerIcon} from '@heroicons/react/24/outline'
const Layout = ({children}) => {
    return (
        <div>
            <Navbar>
          
            </Navbar>           
            {children}
            <Footer />
        </div>
    )
}
export default Layout;