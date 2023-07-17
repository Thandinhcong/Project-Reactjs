import React from 'react'

const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.accessToken;
    return token
}

export default getUserToken