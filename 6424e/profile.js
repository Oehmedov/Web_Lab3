function toggleDropdown() {
    var content = document.getElementById("profileContent");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Profile data as an array of text blocks
let profileData = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ];
  
  // Render profile content
  function renderProfile() {
    const profileDiv = document.getElementById('profileContent');
    profileDiv.innerHTML = '';
  
    profileData.forEach((text, index) => {
      const p = document.createElement('p');
      p.className = 'section-text';
      p.innerHTML = `${text}
        <br>
        <button onclick="editProfile(${index})">Edit</button>
        <button onclick="removeProfile(${index})">Remove</button>`;
      profileDiv.appendChild(p);
    });
  
    // Add button to append new content
    const addBtn = document.createElement('button');
    addBtn.textContent = "Add More Info";
    addBtn.onclick = addProfileInfo;
    profileDiv.appendChild(addBtn);
  }
  
  // Toggle dropdown visibility
  function toggleDropdown() {
    const content = document.getElementById('profileContent');
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  }
  
  // Edit existing block
  function editProfile(index) {
    const newText = prompt("Edit profile block:", profileData[index]);
    if (newText !== null && newText.trim() !== '') {
      profileData[index] = newText.trim();
      renderProfile();
    }
  }
  
  // Add new block
  function addProfileInfo() {
    const newText = prompt("Enter new profile info:");
    if (newText && newText.trim() !== '') {
      profileData.push(newText.trim());
      renderProfile();
    }
  }
  
  // Remove block
  function removeProfile(index) {
    if (confirm("Are you sure you want to remove this info?")) {
      profileData.splice(index, 1);
      renderProfile();
    }
  }
  
  // Initial render
  window.onload = renderProfile;