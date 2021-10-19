import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

 

// Email Password
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
      };
      const hanldePassword = (e) => {
        setPassword(e.target.value);
      };

      const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    
      const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    
      // console.log(email, password)
    
      const handleRegister = () => {
        handleUserRegister(email, password);
      };
    
      const handleLogin = () => {
        handleUserLogin(email, password);
      };
    



// Google Sign In 
    const signInUsingGoogle = () => {
        setLoading(true);
       return  signInWithPopup(auth, googleProvider)
        .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        hanldeEmail,
        hanldePassword,
        handleRegister,
        handleLogin
    }
}

export default useFirebase;