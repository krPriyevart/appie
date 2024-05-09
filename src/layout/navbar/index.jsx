import {UserIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
const menus = [
    {
        label:'Home',
        to:'/'
    },
    {
        label:'About Us',
        to:'/about'
    },
    {
        label:'Blog',
        to:'/blog'
    },
    {
        label:'Contacts',
        to:'/contact'
    },
]
const Navbar = () =>{
    return( 
        <nav className="flex md:flex-row flex-col md:items-center bg-white md:justify-around md:px-0 px-8 md:gap-y:0 gap-6">
            <div className="flex md:flex-row flex-col md:items-center gap-x-16 md:gap-y:0 gap-8">
            <img src="/img/logo.png" alt="logo" className="w-32"/>
            
            <div className="flex gap-x-12 md:flex-row flex-col md:gap-y:0 gap-4">
                {
                  menus.map((item,index)=>(
                    <Link to={item.to} key={index} className="capitalize text-md font-semibold">{item.label}</Link>
                  ))
                }
            </div>
            </div>
            <div className="flex md:flex-row flex-col md:item-center justify-center gap-x-6 md:gap-y:0 gap-6">
                <button className="md:hover:bg-inherit hover:bg-blue-100 md:py-0 py-4 rounded md:px-0 px-6 md:border-0 border border-blue-100 ">
                <Link to="/login">
                    <div className="flex items-center fit-content gap-x-1 capitalize text-md font-semibold">
                    <UserIcon className='w-6 h-6 border-box ' />
                    Login
                    </div>
                    </Link>
                </button>
                <button className="bg-blue-600 px-6 py-3 rounded border hover:bg-white hover:border hover:border-blue-600 box-border text-white hover:text-blue-600">
                <Link to="/signup" className='capitalize text-md font-semibold hover:text-blue-600'>
                    Get Started
                    </Link>
                    </button>
            </div>
        </nav>
    )
}
export default Navbar;