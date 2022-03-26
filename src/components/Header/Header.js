import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneUp} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header className='header p-2 text-center text-white'>
                <h1 className=''>Aero Mart</h1>
                <p>Time for grab some die cast model AirCrafts <span className='ps-1 text-info'><FontAwesomeIcon icon={faPlaneUp}/></span></p>
            </header>
        </div>
    );
};

export default Header;