let searchUserBtn = document.querySelector('.search-the-repos')
let getRepos = document.querySelector('.searchbar')
let reposDiv = document.querySelector('.repos')
let reposDivTitle = document.querySelector('.title')

searchUserBtn.onclick = function() {
  event.preventDefault()
  const API_REPO = `https://api.github.com/users/${getRepos.value}/repos`
  let title = document.createElement('h1')
  title.innerHTML = `<h1>${getRepos.value} Repos</h1> <hr>`
  reposDivTitle.appendChild(title)
  fetch(API_REPO)
    .then((response) => {return response.json()})
    .then((data) => {
      for(let i = 0; i < data.length; i++){
        let repo = document.createElement('div')
        repo.innerHTML =
        `
          <h6>${data[i].name}</h6>
          <p>HTML, CSS & Javascript</p>
        `
        reposDiv.appendChild(repo)
        repo.className = 'repo'
      }  
    })   
}

