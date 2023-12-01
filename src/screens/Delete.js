import { useState } from 'react';
import '../stylings/Create.css'
import { useNavigate } from "react-router-dom";

const Delete = () => {
    const [error, setError] = useState(false)
    const [idNum, setIdNum] = useState('')

    const navigate = useNavigate();

    const url = 'https://api.escuelajs.co/api/v1/products';

    const update = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                    throw Error(`Error Encountered. ${res.status} ${res.statusText}`)
                } else {
                    return res.json();
                }
            }
            )
            .then((data) => {
                console.log('Updated Data Incoming', data);
                return data
            }).catch((error) => {
                setError(true);
                console.error('Error fetching data:', error);
            });

    };
    const deliver = (e) => {

        e.preventDefault();

        const newUrl = ` ${url}/${idNum}`;
        console.log(idNum);
        fetch(newUrl, {
            method: "DELETE"

        }).then((res) => {
            // console.log(res);
            if (!res.ok) {
                console.log(`Request denied!!! ${res.status}  ${res.statusText}`);
            }
            else {
                console.log(`Request accepted. Product id ${idNum} deleted.`);
                update();
                navigate('/')
            }
            return res.json();
        })
    }


    return (
        <form id='1' className="Upload">
            <h2>Remove Product</h2>
            <div className="input">
                <div className="ipField">
                    <label>Product ID number</label>
                    <input type="text"
                        placeholder="Example: 205"
                        value={idNum}
                        onChange={(e) => setIdNum(e.target.value)}
                    />
                </div>

            </div>
            <div className='submitBtn'>
                <button onClick={deliver} > SUBMIT</button >
            </div >
        </form >
    );
}

export default Delete;