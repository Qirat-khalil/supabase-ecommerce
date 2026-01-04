
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
