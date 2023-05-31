import React, {useContext,useEffect} from "react";
import CurrentUserContext from './../../utils/users/CurrentUserContext';
function CurrentUserDisplayInfo(){
    const currentUserObject = useContext(CurrentUserContext);
    
    return (
            <div>
                <h1>{currentUserObject.firstName} {currentUserObject.lastName}</h1>
            </div>
    );
}
export default CurrentUserDisplayInfo;

