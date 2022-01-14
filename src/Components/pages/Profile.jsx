import React from 'react';
import ProfileForm from "../Profile/ProfileForm"
import styles from "../Profile/Profile.module.css"
function Profile() {
    
    return (  
        <div className={styles.profileContainer}>
            <ProfileForm />
        </div>
    );
}

export default Profile;