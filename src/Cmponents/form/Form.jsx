

const Form = () => {

    const value =e=>{
        e.preventDefault();
        console.log(e.target.Name.value)
        console.log(e.target.Email.value)
        console.log(e.target.Pass.value)
        
        console.log("i am from form")
    }
    return (
        <div>
            <form onSubmit={value}>
                <input type="text" name="Name" placeholder="name" className="border-2 p-2 rounded-md" />
                <br />
                <input type="email" name="Email" placeholder="email"  className="border-2 p-2 rounded-md my-6"/>
                
                <br />

                <input type="password" name="Pass" placeholder="Password"  className="border-2 p-2 rounded-md"/>

                <br />
                <input type="submit" className="bg-slate-400 text-white p-2 rounded-xl cursor-pointer hover:bg-slate-500" />
            </form>
        </div>
    );
};

export default Form;