
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
  <div class=" group bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 mt-6 border border-gray-100 hover:-translate-y-1">

      <!-- Post Image -->
      <div class="w-full h-52 rounded-2xl overflow-hidden bg-gray-100 mb-4 relative">
          <img src="${product.postimgUrl}" 
               class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
      </div>

      <!-- Post Content -->
      <h3 class="font-extrabold text-lg text-gray-800 mb-1 line-clamp-1">
        ${product.titlepost}
      </h3>

      <p class="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
        ${product.postdes}
      </p>

      <!-- Profile image (same place, just styled better) -->
      <img src="${product.profileimg}" 
           class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md mb-3">

      <!-- Actions -->
      <div class="flex justify-between items-center mt-2 pt-3 border-t">

          <div class="flex gap-5 text-gray-500 text-sm font-medium">
              <button class="flex items-center gap-1 hover:text-red-500 transition">
                <i class="fa-regular fa-heart"></i> Like
              </button>
              <button class="flex items-center gap-1 hover:text-indigo-500 transition">
                <i class="fa-regular fa-comment"></i> Comment
              </button>
          </div>

          <button 
            class="viewdetailBtn text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 rounded-full shadow hover:scale-105 transition"
            data-id="${product.id}">
            View Detail
          </button>

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
