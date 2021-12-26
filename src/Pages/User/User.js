import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { LocationSearching } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="UserShow">
                    <div className="userShowTop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" alt="" className="userShowImg" />
                        <div className="userSHowTopTitle">
                            <span className='userShowUserName'>
Anna Backer
                                </span>
                                <span className='userShowUsertitle'>
Software Engineer
                                </span>
                        </div>
                    </div>
                    <div className="userShowButtom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userSHowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTotle">annbacker99</span>
                        </div>
                        <div className="userSHowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTotle">2.2.1992</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userSHowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTotle">+214314</span>
                        </div>
                        <div className="userSHowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTotle">annhh@kd.com</span>
                        </div>
                        <div className="userSHowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTotle">Berlin,germany</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>
                    <from className="UserUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >User Name</label>
                                <input type="text" placeholder='annbacker99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder='Anna Backer' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder='annhh@kd.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder='+214314' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Adress</label>
                                <input type="text" placeholder='Berlin,germany' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                <input style={{display:'none'}} type="file" name="" id="file" />
                                
                            </div>
                            <button className="userUpdateButton">User Update</button>
                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
};

export default User;