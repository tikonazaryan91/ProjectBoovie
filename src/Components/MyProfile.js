import React, {Component} from 'react';
import './MyProfile.css';
import {Link} from "react-router-dom";
import myprofilebackimg from "../myprofileimages/myprofilebackimg.png"
import my_profile_boovie_logo from "../myprofileimages/my_profile_boovie_logo.png";
import exampleimg from "../myprofileimages/exampleimg.png";

const backgroundStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${myprofilebackimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class MyProfile extends Component {

    render() {
        return (
            <div className="all_profile" style={backgroundStyle}>
                <div className="all_profile_sections">
                    <div className="header">
                        <div className="topnav">
                            <div className="topnav_logo">
                                <a href="#" className="my_profile_logo">
                                    <img src={my_profile_boovie_logo} alt="logoImg"/>
                                </a>
                            </div>
                            <div className="topnav_input">
                                <input type="text" placeholder="Search.."/>
                            </div>
                            <div className="navs">
                                <div className="navs_feed">
                                    <a href="#">Feed</a>
                                </div>
                                <div className="navs_notifications">
                                    <a href="#"> Notifications</a>
                                </div>
                                <div className="navs_btn">
                                    <button className="logout">Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_section">
                        <div className="user-profile">
                            <div className="main_info">
                                <div className="img_btn">
                                    <img className="avatar"
                                         src="https://sun1-4.userapi.com/c7001/v7001120/19261/2I6tX-7H8WU.jpg"
                                         alt="Avatar"/>
                                </div>
                                <div className="main_info_inpic">
                                    <button className="inpic">+</button>
                                </div>
                                <div className="names_username">
                                    <p className="full_name_profile">
                                        <span>Name</span>
                                        <span>Username</span>
                                    </p>
                                </div>
                                <div className="username_profile">
                                    <p>@username</p>
                                </div>
                                <div className="following_follower">
                                    <div className="following">
                                        <p>
                                            Following
                                        </p>
                                        <p>
                                            45
                                        </p>
                                    </div>
                                    <div className="followers">
                                        <p>
                                            Followers
                                        </p>
                                        <p>
                                            45
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="books_movies_lists">
                            <div className="all_list">
                                <div>
                                    <p>Books</p>
                                    <p>45</p>
                                </div>
                                <div>
                                    <p>Movies</p>
                                    <p>50</p>
                                </div>
                                <div>
                                    <p>Lists</p>
                                    <p>7</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie_lover">
                            <div className="movie_lover_paragraph">
                                <p>You are a movie lover</p>
                            </div>
                            <div className="movie_lover_img">
                                <img src={exampleimg} alt="exampleimage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyProfile;