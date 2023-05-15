// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let container =document.querySelector(".container");
let profile = document.querySelector(".profile");
let tabs = document.querySelector(".tabs");
let repos = document.querySelector(".repos");


getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {

  if (theInput.value == "") {

    alert("Enter username");

  } else if(theInput.value) {

    // to prevent form value
    event.preventDefault()
    fetch(`https://api.github.com/users/${theInput.value}`)
      .then((response) => response.json())
      .then((data) => {

        const avatarUrl = data.avatar_url;
            profile.innerHTML = `
            <a href="#"><img src="${avatarUrl}" alt="" class="profile-pic"></a>
                <p>${theInput.value}</p>
                <button id="profile-btn">Edit profile</button>`;
            tabs.innerHTML = `
            <a href="#">Overview</a>
            <a href="#">Repositories</a>
            <a href="#">Projects</a>
            <a href="#">Packages</a>
            <a href="#">Stars</a>`;

      })
      fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response)=> response.json())
      .then((repositories)=>{
        for (let i = 0; i < repositories.length; i++){
          let repo = document.createElement('div')
          repo.className = "repo";
          repo.innerHTML = `
          <a href="#">${repositories[i].name}</a>
          <p class="public-word">Public</p>
          <p class="type-file">${repositories[i].language}</p>
          `;
          tabs.style.paddingBottom = "-80px";
          repos.appendChild(repo)
        }
      })

    }}


