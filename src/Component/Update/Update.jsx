// import React from "react";
// import Warning from "../Warning/Warning"
// import "./update.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addHello, remove, update, updateUser2 } from "../../redux/userSlide";
// import { updateUser } from "../../redux/apicall";

// export default function Update() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const  user = useSelector((state) => state.user);
//   // const user = useSelector((state) => state.user);
//   const dispatch=useDispatch()

//   const handleUpdate = (e)=>{
//     e.preventDefault()
//     dispatch(addHello({name,email}))
//     // updateUser({name,email},dispatch)
//     // dispatch(updateUser({name,email}))
//     // dispatch(updateUser2({name,email}))
//   }
//   const handleremove = (e)=> {
//     e.preventDefault()
//     // dispatch(remove())
//   }
//   console.log(name,email)
//   return (
//     <div className="update">
//       <div className="updateWrapper">
//         <h3 className="updateTitle">Update Your Account</h3>
//         <Warning />
//         <button className="delete" onClick={handleremove}>Delete Account</button>
//         <div className="updateContainer">
//           <form>
//             <div className="formItem">
//               <label>Profile Picture</label>
//               <div className="profilePic">
//                 <img
//                   className="avatar"
//                   src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                   alt=""
//                 />
//                 <span className="change">Change</span>
//               </div>
//             </div>
//             <div className="formItem">
//               <label>Username</label>
//               <input
//                 className="formInput"
//                 type="text"
//                 placeholder={user.name}
//                 onChange={(e)=>setName(e.target.value)}
//               />
//             </div>
//             <div className="formItem">
//               <label>Email</label>
//               <input
//                 className="formInput"
//                 type="text"
//                 placeholder={user.email}
//                 onChange={(e)=>setEmail(e.target.value)}
//               />
//             </div>
//             <div className="formItem">
//               <label>Password</label>
//               <input className="formInput" type="password" />
//             </div>
//             <button
//               className="updateButton"
//               onClick={handleUpdate}
//               disabled={user.pending}
//             >
//               Update
//             </button>
//             {user.error && <span className="error">Something went wrong!</span>}
//             {user.pending === false && (
//               <span className="success">Account has been updated!</span>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useContext } from "react";
import Warning from '../Warning/Warning'
import "./update.css";
// import { update, remove } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser2,update } from '../../redux/userSlide';
import { updateUser } from "../../redux/apicall";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const user = useSelector((state) => state.user.userInfo);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // without API
    dispatch(update({ name, email }));
    // updateUser({name,email},dispatch)
    // with API
    // dispatch(updateUser2({ name, email }));
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={user.pending}
              className="updateButton"
              onClick={handleClick}
            >
              Update
            </button>
            {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}