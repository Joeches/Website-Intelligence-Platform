import { auth } from './firebase';
import { signOut } from 'firebase/auth';


export async function getCurrentUser() {
return new Promise((resolve) => {
const unsub = auth.onAuthStateChanged((user) => {
resolve(user);
unsub();
});
});
}


export function logout() {
signOut(auth);
localStorage.removeItem('token');
window.location.href = '/auth/login';
}
