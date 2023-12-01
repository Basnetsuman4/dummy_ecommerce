import { useState } from 'react';
import '../stylings/Create.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';


const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        images: [],
        // categoryId: ""
    })

    // const { title, description, price, images, categoryId } = formData;



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'images' ? [value] : value
        setFormData({
            ...formData,
            [name]: newValue
        });
    };




    const deliver = (e) => {

        e.preventDefault();

        const url = "https://api.escuelajs.co/api/v1/products/";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then(data => {
            console.log('Data Submitted : ', data);
            setFormData(
                {
                    title: "",
                    description: "",
                    price: "",
                    images: [],
                    categoryId: ""
                }
            );
            navigate('/')

        }).catch(error => {
            console.log(error);
        })


    }


    return (<div className='CreateScrn'>
        <form id='0' className="Upload">
            <h2>Add Product</h2>
            <div className="input">
                <div className="ipField">
                    <label>Title</label>
                    <input type="text"
                        placeholder="Product Name"
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ipField">
                    <label>Description   </label>
                    <textarea
                        type="text"
                        placeholder="Product description"
                        value={formData.description}
                        name='description'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ipField">
                    <label>Price</label>
                    <input
                        type="number"
                        min={0}
                        value={formData.price}
                        name='price'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ipField">
                    <label>Upload Image (URL only)</label>
                    <input
                        type="text"
                        placeholder='Eg : https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg'
                        value={formData.images}
                        name='images'
                        onChange={handleInputChange}
                    />


                </div>
                <div className="ipField">
                    <label >CategoryId</label>

                    <select
                        name='categoryId'
                        value={formData.categoryId}
                        onChange={handleInputChange}
                    >
                        {/* <option disabled selected>--Select Category--</option> */}
                        <option value='DEFAULT' disabled  >--Select Category--</option>
                        <option value={1} >Category 1</option>
                        <option value={2}  >Category 2</option>
                        <option value={3} >Category 3</option>
                        <option value={4}  >Category 4</option>
                    </select>
                </div>
            </div>
            <div className='submitBtn'>
                <button onClick={deliver}>SUBMIT</button>
            </div>
        </form >
    </div>);
}

export default Create;