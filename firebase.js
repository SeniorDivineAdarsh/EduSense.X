<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-8Q5qvDfR_oRWQZx_TSlYbqjpU86NuEY",
  authDomain: "edusense-x-2011z.firebaseapp.com",
  projectId: "edusense-x-2011z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if(!user){
    window.location.href = "login.html";
  }
});
</script>
