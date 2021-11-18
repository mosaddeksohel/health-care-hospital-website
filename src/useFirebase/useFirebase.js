
// export default useFirebase;
import { useEffect, useState } from "react";
import initializationAuthentication from "../Pages/firebase/firebase.init";

// import initializeAuthentication from "../Page/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

// initialize firebase application 
initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = (location, history) => {
        return signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setError('')
            })
    }



    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };

                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                const destination = location?.state?.from || '/';
                history.replace(destination)

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    };

    const LoginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // state change observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])




    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }



    return {
        user,
        isLoading,
        error,
        signInUsingGoogle,
        registerUser,
        LoginUser,
        Logout
    };
}


export default useFirebase;