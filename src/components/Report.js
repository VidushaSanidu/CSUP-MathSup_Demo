import { Link } from "react-router-dom"
import logo1 from '../img/logo1.jpg'

function Report({daata}) {
    
    
     return (
        <div className="posts-tile">
           
            <div className='top'>
               <img src={logo1} alt='cover' width='100%'></img>
            </div>

            <div className='title'>
                <span >{daata.title}</span>
            </div>

            <div className='writer'>
                <span >
                    By : {daata.userId}
                </span>
            </div>
            <div>
            <Link to={`/reports/${daata.id}`}>
                <button>See more</button>
            </Link>
           </div>
            
        </div>
       

    )
}

export default Report
