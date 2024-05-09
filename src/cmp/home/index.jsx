import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactDOM from 'react-dom'
import { fa0} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay} from '@fortawesome/free-solid-svg-icons'
import Layout from "../../layout"
const Home =() =>{
    return(
        <Layout>
        <div className="p-24">
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-y-8">
                        <h1 className="text-6xl font-bold text-#0E1133">Manage it all, in this all new system.</h1>
                        <p className="text-xl">Hanky panky lavatory up the duff jolly good cack brolly is chinwag zonked happy days sloshed.</p>
                        <div className="flex gap-x-4">
                        <button className="p-4 py-2 border-#0E1133-500 border-0 border-solid rounded-md bg-[#0E1133] text-white hover:bg-white hover:text-inherit">Download for iOS</button>
                        <button className="p-4 py-2 border-[#0E1133] border-2 border-solid rounded-md">Download for Android</button>
                        </div>
                    </div>
                    <div>
                        2
                    </div>
                </div>
            </div>
        </div>
        </Layout>   
    )
}
export default Home