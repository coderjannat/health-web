import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();




    // Email Password
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    // const handleUserRegister = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    //         .finally(() => { setLoading(false) });
    // };
    const handleUserRegister = (email, password) => {

        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

            })
            .finally(() => { setLoading(false) })
            .catch((error) => console.log(error.message));
    };


    const handleUserLogin = (email, password) => {

        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)

            .finally(() => { setLoading(false) })

            .catch((error) => {
                setError(error.message);
            });

    };




    // Google Sign In 
    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
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
        handleUserRegister,
        handleUserLogin
    }
}

export default useFirebase;
