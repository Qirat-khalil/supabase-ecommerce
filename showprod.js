

// import supabase from "./config.js";
// //   get user

// const { data: { user } } = await supabase.auth.getUser();
// if (!user) {
//     alert("Please login first");
//     window.location.href = "./index.html";
// }


// // ================= FETCH PRODUCTS =================
// const prodcard = document.getElementById("showUser");

// async function fetchProductsAdmin() {
//     const { data, error } = await supabase
//         .from("postapp")
//         .select("*");
//     if (error) return console.log(error);
//     console.log(data);


// prodcard.innerHTML = data.map(product => {
//     // Check if logged-in user is the owner of the post
//     const isOwner = user && product.user_id === user.id;

//     return `
//   <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 mt-5">

//     <!-- Post Image -->
//     <div class="w-full h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
//       <img src="${product.postimgUrl}" class="w-full h-full object-cover">
//     </div>

//     <!-- Post Content -->
//     <h3 class="font-bold text-lg text-gray-800 mb-1">
//       ${product.titlepost}
//     </h3>
//     <p class="text-sm text-gray-600 line-clamp-2">
//       ${product.postdes}
//     </p>

//     <!-- Actions -->
//     <div class="flex justify-between items-center mt-4">
//       <div class="flex gap-4 text-gray-600 text-sm">
//         <button class="hover:text-red-500 transition">
//           <i class="fa-regular fa-heart"></i> Like
//         </button>
//         <button class="hover:text-indigo-500 transition">
//           <i class="fa-regular fa-comment"></i> Comment
//         </button>
//       </div>

//       <!-- ONLY SHOW EDIT/DELETE IF OWNER -->
//       ${isOwner ? `
//       <div class="flex gap-2">
//         <button class="editBtn text-xs bg-yellow-500 text-white px-3 py-1 rounded-lg"
//           data-id="${product.id}">
//           Edit
//         </button>
//         <button class="deltBtn text-xs bg-red-500 text-white px-3 py-1 rounded-lg"
//           data-id="${product.id}">
//           Delete
//         </button>
//       </div>` : ''}

//     </div>
//   </div>`;
// }).join("");



//     document.querySelectorAll(".editBtn").forEach(btn => {
//         btn.addEventListener("click", async() => {
//             const id = btn.dataset.id;
//             // const { error } = await supabase
//             //     .from('adminProd')
//             //     .update({ name: 'piano' })
//             //     .eq('id', id)
//           window.location.href = `edit-product.html?id=${id}`;

//             if (error) {
//                 console.log(error);

//             }
//         });
//     });

//     document.querySelectorAll(".deltBtn").forEach(btn => {
//         btn.addEventListener("click", async e => {
//             const id = btn.dataset.id;
//             const { error } = await supabase
//                 .from("postapp")
//                 .delete()
//                 .eq("id", id);
//             if (!error) fetchProductsAdmin();
//         });
//     });
// }

// fetchProductsAdmin();





// import supabase from "./config.js";
// //   get user

// const { data: { user } } = await supabase.auth.getUser();
// if (!user) {
//     alert("Please login first");
//     window.location.href = "./index.html";
// }


// // ================= FETCH PRODUCTS =================
// const prodcard = document.getElementById("showUser");

// async function fetchProductsAdmin() {
//     const { data, error } = await supabase
//         .from("postapp")
//         .select("*");
//     if (error) return console.log(error);
//     console.log(data);


// prodcard.innerHTML = data.map(product => {
//     // Check if logged-in user is the owner of the post
//     // const isOwner = user && product.user_id === user.id;

//     return `
//   <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 mt-5">

//     <!-- Post Image -->
//     <div class="w-full h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
//       <img src="${product.postimgUrl}" class="w-full h-full object-cover">
//     </div>

//     <!-- Post Content -->
//     <h3 class="font-bold text-lg text-gray-800 mb-1">
//       ${product.titlepost}
//     </h3>
//     <p class="text-sm text-gray-600 line-clamp-2">
//       ${product.postdes}
//     </p>

//     <!-- Actions -->
//     <div class="flex justify-between items-center mt-4">
//       <div class="flex gap-4 text-gray-600 text-sm">
//         <button class="hover:text-red-500 transition">
//           <i class="fa-regular fa-heart"></i> Like
//         </button>
//         <button class="hover:text-indigo-500 transition">
//           <i class="fa-regular fa-comment"></i> Comment
//         </button>
//       </div>

//        <button class="viewdetailBtn text-xs bg-red-500 text-white px-3 py-1 rounded-lg"
//            data-id="${product.id}">
//            View Detail
//          </button>
//       </div>
//       </div>`;
// }).join("");
//     //   <!-- ONLY SHOW EDIT/DELETE IF OWNER -->
//     //   <div class="flex gap-2">
//     //     <button class="editBtn text-xs bg-yellow-500 text-white px-3 py-1 rounded-lg"
//     //       data-id="${product.id}">
//     //       Edit
//     //     </button>
//     //     <button class="deltBtn text-xs bg-red-500 text-white px-3 py-1 rounded-lg"
//     //       data-id="${product.id}">
//     //       Delete
//     //     </button>
//     //   </div>

//     document.querySelectorAll(".viewdetailBtn").forEach(btn =>{
//         btn.addEventListener("click",async() => {
//             const id = btn.dataset.id;
            
//         //   window.location.href = `edit-product.html?id=${id}`;
//         window.location.href="onlyUserPro.html"
//     })
//     })

//     document.querySelectorAll(".editBtn").forEach(btn => {
//         btn.addEventListener("click", async() => {
//             const id = btn.dataset.id;
//             // const { error } = await supabase
//             //     .from('adminProd')
//             //     .update({ name: 'piano' })
//             //     .eq('id', id)
//           window.location.href = `edit-product.html?id=${id}`;

//             if (error) {
//                 console.log(error);

//             }
//         });
//     });

//     document.querySelectorAll(".deltBtn").forEach(btn => {
//         btn.addEventListener("click", async e => {
//             const id = btn.dataset.id;
//             const { error } = await supabase
//                 .from("postapp")
//                 .delete()
//                 .eq("id", id);
//             if (!error) fetchProductsAdmin();
//         });
//     });
// }

// fetchProductsAdmin();





























// import supabase from "./config.js";
// // get user
// const { data: { user } } = await supabase.auth.getUser();
// if (!user) {
//     alert("Please login first");
//     window.location.href = "./index.html";
// }

// const prodcard = document.getElementById("showUser");

// async function fetchProductsAdmin() {
//     const { data, error } = await supabase
//         .from("postapp")
//         .select("*");
//     if (error) return console.log(error);

//     prodcard.innerHTML = data.map(product => {
//         return `
//         <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 mt-5">

//             <!-- Post Image -->
//             <div class="w-full h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
//                 <img src="${product.postimgUrl}" class="w-full h-full object-cover">
//             </div>

//             <!-- Post Content -->
//                <img class="text-sm rounded-full w-30 h-30" src="${product.profileimg}">
//             <h3 class="font-bold text-lg text-gray-800 mb-1">${product.titlepost}</h3>
//             <p class="text-sm text-gray-600 line-clamp-2">${product.postdes}</p>
          
//             <!-- Actions -->
//             <div class="flex justify-between items-center mt-4">
//                 <div class="flex gap-4 text-gray-600 text-sm">
//                     <button class="hover:text-red-500 transition">
//                         <i class="fa-regular fa-heart"></i> Like
//                     </button>
//                     <button class="hover:text-indigo-500 transition">
//                         <i class="fa-regular fa-comment"></i> Comment
//                     </button>
//                 </div>

//                 <!-- View Detail -->
//                 <button class="viewdetailBtn text-xs bg-red-500 text-white px-3 py-1 rounded-lg"
//                         data-id="${product.id}">
//                     View Detail
//                 </button>
//             </div>
//         </div>
//         `;
//     }).join("");

//     // Redirect to detail page with post ID
//     document.querySelectorAll(".viewdetailBtn").forEach(btn => {
//         btn.addEventListener("click", () => {
//             const id = btn.dataset.id;
//             window.location.href = `onlyUserPro.html?id=${id}`;
//         });
//     });
// }

// fetchProductsAdmin();























import supabase from "./config.js";

// Get logged-in user
const { data: { user } } = await supabase.auth.getUser();
if (!user) {
    alert("Please login first");
    window.location.href = "./index.html";
}

// Navbar profile
const profImgNavbar = document.getElementById("profimg");
const profNameNavbar = document.getElementById("profileName");
let profileImg = document.getElementById('profileImg')
console.log(profileImg);


// if (profImgNavbar) profImgNavbar.querySelector("img").src = user.user_metadata?.profile_url || "https://i.pravatar.cc/100";
// if (profNameNavbar) profNameNavbar.textContent = user.user_metadata?.name || "User";

// Fetch posts
let userId =null
const prodcard = document.getElementById("showUser");

async function fetchProductsAdmin() {
    const { data, error } = await supabase.from("postapp").select("*");
    if (error) return console.log(error);
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user.user_metadata.profile_url);
    profileImg.src= user.user_metadata.profile_url
    

console.log(data);

    prodcard.innerHTML = data.map(product => {
      console.log(product);
      

        return `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 mt-5">
          

            <!-- Post Image -->
            <div class="w-40 h-48 rounded-xl overflow-hidden bg-gray-100 mb-3">
                <img src="${product.postimgUrl}" class="w-[200px] h-[200px] object-cover">
            </div>

            <!-- Post Content -->
            <h3 class="font-bold text-lg text-gray-800 mb-1">${product.titlepost}</h3>
            <p class="text-sm text-gray-600 line-clamp-2">${product.postdes}</p>
              <img src="${product.profileimg}" class="w-10 h-10 rounded-full object-cover">

            <!-- Actions -->
            <div class="flex justify-between items-center mt-4">
                <div class="flex gap-4 text-gray-600 text-sm">
                    <button class="hover:text-red-500 transition"><i class="fa-regular fa-heart"></i> Like</button>
                    <button class="hover:text-indigo-500 transition"><i class="fa-regular fa-comment"></i> Comment</button>
                </div>
                <button class="viewdetailBtn text-xs bg-red-500 text-white px-3 py-1 rounded-lg" data-id="${product.id}">View Detail</button>
            </div>
        </div>
        `;
    }).join("");

    // View detail button
    document.querySelectorAll(".viewdetailBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            window.location.href = `onlyUserPro.html?id=${id}`;
        });
    });
}

fetchProductsAdmin();
