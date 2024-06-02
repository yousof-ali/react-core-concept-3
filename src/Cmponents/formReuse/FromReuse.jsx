import React from 'react';

const FromReuse = ({handleClk,formTitle,btnText}) => {

    const handleDefault = e =>{
        e.preventDefault()
        const data = {
            name:e.target.Name.value,
            email:e.target.Email.value,
            password:e.target.Pass.value,
            address:e.target.from.value
        }
        handleClk(data)
    }
    return (
        <div>
            <h2 className='text-3xl'>{formTitle}</h2>
            <form onSubmit={handleDefault}>
                <input type="text" name="Name" placeholder="name" className="border-2 p-2 rounded-md" />
                <br />
                <input type="email" name="Email" placeholder="email"  className="border-2 p-2 rounded-md my-6"/>
                
                <br />

                <input type="password" name="Pass" placeholder="Password"  className="border-2 p-2 rounded-md"/>

                <br />

                <input type="text" name="from" placeholder="form"  className="border-2 p-2 rounded-md my-6"/>

                <br />
                <input value={btnText} type="submit" className="bg-slate-400 text-white p-2 rounded-xl cursor-pointer hover:bg-slate-500"  />
            </form>
        </div>
    );
};

export default FromReuse;