import '../stylings/Navbar.css'
import logo from '../assets/image/logo.png'
import { valOfSearchContext } from '../App';
import { useContext } from 'react';

const Navbar = ({ newValue, thisActAaSetSearch }) => {

    const { setData: setContextData } = useContext(valOfSearchContext)

    return (
        <div className='Navbar'>
            <div className="logoBox">
                <img src={logo} alt='Logo' />
            </div>
            <div className="searchBox">
                <input
                    className='searchBar'
                    placeholder='Search...'
                    value={newValue}
                    onChange={(e) => {
                        const val = e.target.value
                        setContextData(val)

                    }}
                />
                {/* <button onClick={handleSearchClick}>Search</button> */}

            </div>

        </div>
    );
}

export default Navbar;