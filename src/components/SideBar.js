import '../stylings/SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = () => {

    return (
        <div className='SBar'>
            <div className='Item'>
                <Link to='/'>
                    <button>Show All Item</button>
                </Link>
                {/* <div className='Categ'>
                    <div className='Categ'>
                        <label>Select Category</label>
                        <select >
                            <option value='DEFAULT' disabled selected>--Select Category--</option>
                            <option value={1}>Catg. 1</option>
                            <option value={2}>Catg. 2</option>
                            <option value={3}>Catg. 3</option>
                            <option value={4}>Catg. 4</option>
                        </select>
                    </div>
                    <button>Search</button>
                </div> */}
            </div>

            <div className='action'>

                <Link to='/addProduct'>
                    <button>Add Product</button>
                </Link>
                <Link to='/removeProduct'>
                    <button>Delete Product </button>
                </Link>
            </div>
        </div>

    );
}

export default SideBar;