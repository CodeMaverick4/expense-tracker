import { onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContext";

const Profile = () => {
    const { userData, handleLogout } = useContext(authContext)
    const [displayName, setDisplayName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const updateUserProfile = async () => {
        if (displayName === '') {
            alert("Please enter profile name.")
            return
        }
        if (photoUrl === '') {
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

                <div>
                    <span className="px-3 py-1 cusor-pointer rounded-4" style={{ width: '400px', backgroundColor: '#E8DADC' }}> Your profile is <b>64%</b> completed. A complete profile have higher chances of landing a job.
                        <span style={{ color: '#6041D5' }}>Complete now</span></span>

                    {userData && <button className='btn btn-danger ms-3' onClick={handleLogout}>Logout</button>}
                </div>
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
                        <div className="border border-black rounded-2"><input type="text" id="fullname" placeholder="Enter full name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} /></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="profile">Profile Photo URL:</label>
                        <div className="border border-black rounded-2"><input type="text" id="profile" placeholder="Enter photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} /></div>
                    </div>
                </div>

                {/* Update button */}
                <button className="update-btn" onClick={updateUserProfile}>Update</button>
            </div>

        </>
    )
}

export default Profile