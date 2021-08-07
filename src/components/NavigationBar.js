import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
function NavigationBar() {
    return (
        <header>
            <section className='header-container'>
                <div className ='right-menu' >
                    <img src= {logo} alt ='logo' width="68px" />
                    <Link to='/' >MathSup</Link>
                </div>
                <div className = 'left-menu'> 
                    <Link to='/'>menu </Link>
                    <Link className='button-container' to='./AddReport'>New Report</Link>

                </div>

            </section>
           
            
            
        </header>
    )
}

export default NavigationBar
