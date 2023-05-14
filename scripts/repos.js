let searchUserBtn = document.querySelector('.search-the-repos')
let getRepos = document.querySelector('.searchbar')
let reposDiv = document.querySelector('.repos')

searchUserBtn.onclick = function() {
  event.preventDefault()
  const API_REPO = `https://api.github.com/users/${getRepos.value}/repos`
  fetch(API_REPO)
    .then((response) => {return response.json()})
    .then((data) => {
      for(let i = 0; i < data.length; i++){
        let repo = document.createElement('div')
        repo.innerHTML =`<h3>${data[i].name}</h3>`
        reposDiv.appendChild(repo)
        repo.className = 'repo'
      }  
    })   
}

