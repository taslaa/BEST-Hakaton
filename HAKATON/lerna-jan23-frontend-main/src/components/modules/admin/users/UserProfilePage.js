// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import UsersService from '../../../../data/services/UsersService';

// export default function UserProfilePage() {
//     const [user, setUser] = useState();
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchAndSetUser = async () => {
//             const userObject= localStorage.getItem("token");
//             const object= JSON.Parse(userObject);
//             const userId=object.id;
//             console.log(userId);
//             const userDetails = await UsersService.getById(userId);
//             setUser(userDetails);
//         };
//         fetchAndSetUser();
//     }, []);


//     return (
//         {user &&
//              user.map(user)}
//      )
      
      
// }
