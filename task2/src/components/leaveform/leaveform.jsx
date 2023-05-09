import React from 'react';
import "./Leave.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Leave = () => {

    const [data, setData] = useState({
        username: "",
        leavetype: "",
        startdate: "",
        enddate: "",
        reason: ""
    });
    function handleInput(e) {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/leaveform', requestOptions)
            .then(response => response.json())
    }
    


    return (
        <>
            <div className='container'>
                <h2> Leave Form </h2>
                <form onSubmit={handleSubmit}>
                    <div className="r-form">
                        <label htmlFor='username'>User Name :</label>
                        <input type="text"
                            placeholder="User Name*"
                            onChange={handleInput}
                            required  autoComplete='off'
                            value={data.username}
                            id="username" name="username"
                        />
                    </div>

                    <div className='r-form'>
                        <label htmlFor='leavetype' className='r-form-select'>Leave Type:</label>
                        <br/>
                        <select id='leavetype' name='leavetype'  onChange={handleInput} value={data.leavetype}  required autoComplete='off'  > 
                        <option >-------------------------------------------------------------------------------------------Select Leave Type------------------------------------------------------------------------------------------</option>
                            <option value='Annual'>Annual</option>
                            <option value='Sick'>Sick</option>
                            <option value='Unpaid'>Unpaid</option>
                        </select>
                    </div>
                    <div className="r-form">
                        <label htmlFor='start date'>Start Date :</label>
                        <input type='date'

                            onChange={handleInput}
                            required value={data.startdate} autoComplete='off'
                            id="startdate" name="startdate" 
                        />
                    </div>
                    <div className="r-form">
                        <label htmlFor='End date'>End Date :</label>
                        <input type='date'
                            onChange={handleInput}
                            required value={data.enddate} autoComplete='off'
                            id="enddate" name="enddate"
                        />
                    </div>
                    <div className='r-form'>
                        <label htmlFor='reason'>Reason :</label>
                        <input type='text' placeholder='Reason for leave' autoComplete='off'
                            id='reason' name='reason' onChange={handleInput} value={data.reason} />
                    </div>
                    <div className="r-form-btn ">
                        <button type="submit" class=" btn-primary  btn-lg">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Leave;