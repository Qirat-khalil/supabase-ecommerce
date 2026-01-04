// import supabase from "./config.js";

// // --------------------------signup

// let signEmail = document.getElementById("signEmail")
// let signPass = document.getElementById("signPass")
// let userName = document.getElementById("userName")
// let signBtn = document.getElementById("signBtn")
//    const profileimg = document.getElementById('profileimg');


// signBtn && signBtn.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const semail = signEmail.value.trim();
//     const spassword = signPass.value.trim();
//     const sname = userName.value.trim();

//     if (!semail || !spassword) {
//         alert(" Please Enter Email or Password ");
//         return;
//     }
//     if (!semail && !spassword) {
//         alert("please signup first")
//     } else if (!semail) {
//         alert("Enter your Email")
//     } else if (!spassword) {
//         alert("Enter your Password")
//     }

//     // ✅ Signup
//     const { data, error } = await supabase.auth.signUp({
//         email: semail,
//         password: spassword,
//         options: {
//             data: {
//                 name: sname,
//             }
//         }
//     });

//     if (error) {
//         alert(error.message);
//         return;
//     }

//     console.log("Signup successful", data);











//     const profileFile = profileimg.files[0];
//     const profileName = `${Date.now()}-${file.name}`;

//     // Upload image
//     const { data: profileData, error: profileError } = await supabase
//         .storage
//         .from('profileimg')
//         .upload(profileName, profileFile);

//     if (profileError) return console.log(profileError);
//     if (profileData) {
//         console.log(profileData);

//     }

//     // Get public URL
//     const { data: propublicData } = supabase
//         .storage
//         .from('profileimg')
//         .getPublicUrl(fileName);

//     const proimgUrl = propublicData.publicUrl;



//     // ✅ Redirect AFTER everything
//     window.location.href = "showprod.html";
// });


// // =----------------------login 




// let userEmail = document.getElementById("inputEmail");
// let userPass = document.getElementById("inputpass");
// let loginBtn = document.getElementById("loginBtn");

// loginBtn && loginBtn.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const logemail = userEmail.value.trim();
//     const logpass = userPass.value.trim();

//     if (!logemail || !logpass) {
//         alert("Please enter email and password");
//         return;
//     }

//     const { data, error } = await supabase.auth.signInWithPassword({
//         email: logemail,
//         password: logpass,
//     });

//     if (error) {

//         console.log(error, "error login");
//         return;
//     } else {
//         console.log(data);

//     }


// });

// // //logout functionality___________________________________
// let logoutBtn = document.getElementById("logBtn");

// async function logout(e) {
//     e.preventDefault()

//     try {
//         const { error } = await supabase.auth.signOut();

//         if (!error) {
//             alert("logout successfully");
//             console.log("gello");

//             location.href = "index.html"
//         }
//     } catch (er) {
//         console.log(er);
//     }
// }

// logoutBtn && logoutBtn.addEventListener("click", logout);








// import supabase from "./config.js";

// // -------------------------- SIGNUP --------------------------
// const signEmail = document.getElementById("signEmail");
// const signPass = document.getElementById("signPass");
// const userName = document.getElementById("userName");
// const signBtn = document.getElementById("signBtn");
// const profileimgInput = document.getElementById("profileimg"); // your file input in HTML

// signBtn?.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const email = signEmail.value.trim();
//     const password = signPass.value.trim();
//     const name = userName.value.trim();

//     if (!email || !password || !name) {
//         alert("Please fill all fields");
//         return;
//     }

//     // ✅ Signup
//     const { data: signData, error: signError } = await supabase.auth.signUp({
//         email,
//         password,
//         options: { data: { name } }
//     });

//     if (signError) {
//         alert(signError.message);
//         return;
//     }

//     let profileUrl = null;
//     const file = profileimgInput?.files[0];
//     if (file) {
//         const fileName = `${Date.now()}-${file.name}`;

//         // Upload profile image to Supabase storage
//         const { error: uploadError } = await supabase.storage
//             .from("profileimg")
//             .upload(fileName, file);

//         if (uploadError) {
//             alert("Profile image upload failed");
//             console.log(uploadError);
//             return;
//         }

//         // Get public URL
//         const { data: publicData } = supabase.storage
//             .from("profileimg")
//             .getPublicUrl(fileName);

//         profileUrl = publicData.publicUrl;

//         // Update user metadata with profile image
//         await supabase.auth.updateUser({
//             data: { name, profile_url: profileUrl }
//         });
//     }

//     alert("Signup successful!");
//     window.location.href = "showprod.html";
// });

// // -------------------------- LOGIN --------------------------
// const userEmail = document.getElementById("inputEmail");
// const userPass = document.getElementById("inputpass");
// const loginBtn = document.getElementById("loginBtn");

// loginBtn?.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const email = userEmail.value.trim();
//     const password = userPass.value.trim();

//     if (!email || !password) {
//         alert("Please enter email and password");
//         return;
//     }

//     const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password
//     });

//     if (error) {
//         alert(error.message);
//         return;
//     }

//     alert("Login successful!");
//     window.location.href = "showprod.html";
// });

// // -------------------------- LOGOUT --------------------------
// const logoutBtn = document.getElementById("logBtn");

// logoutBtn?.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signOut();
//     if (!error) {
//         alert("Logged out successfully");
//         window.location.href = "index.html";
//     }
// });

// // -------------------------- SHOW LOGGED-IN USER PROFILE --------------------------
// const profileNameEl = document.getElementById("profileName");
// const profileImgEl = document.getElementById("profileImg");

// async function showUserProfile() {
//     const { data: { user } } = await supabase.auth.getUser();
//     if (!user) return;

//     if (profileNameEl) profileNameEl.textContent = user.user_metadata?.name || "User";
//     if (profileImgEl) profileImgEl.src = user.user_metadata?.profile_url || "https://i.pravatar.cc/100";
// }

// // Call on page load
// showUserProfile();

































import supabase from "./config.js";

const title = document.getElementById("titleInput");
const description = document.getElementById("description");
const image = document.getElementById("imageInput");
const profileImgInput = document.getElementById("profileimg"); // optional
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("Please login first");

    // Use user's profile from metadata
    let proimgUrl = user.user_metadata?.profile_url || "https://i.pravatar.cc/100";

    // Optional: update profile if user uploads a new one while posting
    if (profileImgInput.files[0]) {
        const newProfile = profileImgInput.files[0];
        const fileName = `${Date.now()}-${newProfile.name}`;
        const { error: uploadError } = await supabase.storage
            .from("profileimg")
            .upload(fileName, newProfile);
        if (!uploadError) {
            const { data: publicData } = supabase.storage
                .from("profileimg")
                .getPublicUrl(fileName);
            proimgUrl = publicData.publicUrl;

            // Update user metadata
            await supabase.auth.updateUser({
                data: { profile_url: proimgUrl }
            });
        }
    }

    // Upload post image
    const file = image.files[0];
    if (!file) return alert("Please select a post image");

    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
        .from("postimg")
        .upload(fileName, file);
    if (uploadError) return console.log(uploadError);

    const { data: publicData } = supabase.storage
        .from("postimg")
        .getPublicUrl(fileName);
    const imgUrl = publicData.publicUrl;

    // Insert post with owner info
    const { error: insertError } = await supabase.from("postapp").insert([{
        titlepost: title.value,
        postdes: description.value,
        postimgUrl: imgUrl,
        user_id: user.id,
        username: user.user_metadata?.name || "User",
        profileimg: proimgUrl
    }]);

    if (insertError) return console.log(insertError);
    alert("Post added!");
    window.location.href = "showprod.html";
});

