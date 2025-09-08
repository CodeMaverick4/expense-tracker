import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Profile = () => {
    const [displayName ,setDisplayName]= useState('');
    const [photoUrl ,setPhotoUrl]= useState('')

    const updateUserProfile = async () => {
        if( displayName === '' ){
            alert("Please enter profile name.")
            return
        }
        if( photoUrl === '' ){
            alert("Please enter photo url.")
            return
        }
        if (auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, {
                    displayName: displayName,
                    photoURL: photoUrl
                });
                console.log("Profile updated successfully!");
                alert("profile updated...")
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        } else {
            console.log("No user is logged in");
        }
    }

    return (
        <>
            <div className="p-3 border-bottom border-black d-flex justify-content-between align-items-center ">
                <h4>Winners never quite, Quitters never win.</h4>

                <span className="px-3 py-1 cusor-pointer rounded-4" style={{ width: '400px', backgroundColor: '#E8DADC' }}> Your profile is <b>64%</b> completed. A complete profile have higher chances of landing a job.
                    <span style={{ color: '#6041D5' }}>Complete now</span></span>
            </div>

            <div className="contact-form">
                {/* Header */}
                <div className="contact-header">
                    <h4>Contact Details</h4>
                    <button className="cancel-btn">Cancel</button>
                </div>

                {/* Form fields */}
                <div className="form-fields">
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" id="fullname" placeholder="Enter full name" onChange={(e)=>setDisplayName(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="profile">Profile Photo URL:</label>
                        <input type="text" id="profile" placeholder="Enter photo URL" onChange={(e)=>setPhotoUrl(e.target.value)}/>
                    </div>
                </div>

                {/* Update button */}
                <button className="update-btn" onClick={updateUserProfile}>Update</button>
            </div>

        </>
    )
}

export default Profile