import { defineStore, acceptHMRUpdate } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid
                    this.user.email = user.email
                    this.router.push('/')
                } else {
                    this.user = {}
                    this.router.replace('/auth')
                }
            });
        },
        registerUser(credentials) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);

                })
                .catch((error) => {
                    // console.log(error.message);
                });
        },
        logoutUser() {
            signOut(auth).then(() => {
                // console.log('user signed out');
            }).catch((error) => {
                // console.log(error.message);
            });

        },
        loginUser(credentials) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot))
}