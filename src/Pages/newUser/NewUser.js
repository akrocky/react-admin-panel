import './NewUser.css';

const newUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New user</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label >New user</label>
                <input type="text" placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                <input type="text" placeholder='John@kn.com' />
                </div>
                <div className="newUserItem">
                    <label >Passwor</label>
                <input type="password" placeholder='type password' />
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                <input type="number" placeholder='+3232324' />
                </div>
                <div className="newUserItem">
                    <label >Adress</label>
                <input type="number" placeholder='Berlin|Germany' />
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">

                <input type="radio" name='gender' id='male' value='male' />
                <label for="male">Male</label>
                <input type="radio" name='gender' id='female' value='female' />
                <label for="female">Female</label>
                <input type="radio" name='gender' id='other' value='other' />
                <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label >Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <br />
                <div className='buttonDIv'>
                <button className="newUserButton">Create</button>
                </div>
                
            </form>
        </div>
    );
};

export default newUser;