import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Home/Firebase/firebase.init";

    initializeAuthentication();

        const useFirebase =() =>{
            const [ user, setUser] = useState({});

            const auth = getAuth();

            const signInUsingGoogle =()=> {
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                .then( result => {
                    setUser(result.user);
                })

            }
        /* ----using useEffect for outside observing----- */

        useEffect( ()=>{
            const unsubscribed = onAuthStateChanged( auth, (user)=>{
                if(user){
                    setUser(user);
                }
                else{
                    setUser({})
                }
            })
            /* ----declaring unsubscribed for better user performance------ */
            return () => unsubscribed;
        },[])    

        const logOut =() =>{    
            signOut(auth).then(() => { })

            .catch((error) => { });
            }
            


            return {
                user,
                signInUsingGoogle,
                logOut
            }
        }


        export default useFirebase;