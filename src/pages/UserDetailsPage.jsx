import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneUser } from "redux/users/usersOperations";
import { selectOneUser } from "redux/users/usersSelectors";

const UserDetailsPage = () => {
    const { id } = useParams();
    const user = useSelector(selectOneUser); 
    console.log(user); 
 
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(fetchOneUser(id))
    }, [dispatch, id])
    
    return (
        <div>
            {user && <>
                <img src={ user.avatar} alt={user.name} />
                <p>{user.name}</p>
                <p>{ user.email}</p>
                <p>{user.address}</p>
                <p>{ user.tel}</p>
            </>}  
            <button>Delete</button>
    </div>
    )
}

export default UserDetailsPage; 