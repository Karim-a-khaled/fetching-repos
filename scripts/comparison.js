let repoOneInput = document.querySelector('.first-repo-inp')
let repoTwoInput = document.querySelector('.second-repo-inp')
let FetchBtn = document.querySelector('.btn')
let theContainer = document.querySelector('.container')

FetchBtn.onclick = function(){
  if(repoOneInput.value =='' || repoTwoInput.value == ''){
    alert('please fill the fields with valid info')
  }
  else if(repoOneInput.value == repoTwoInput.value){
    alert('You entered the same username TWICE!')
  }
  else{
  // Start Repo One
  const API_REPO_ONE = `https://api.github.com/users/${repoOneInput.value}/repos`
  const API_REPO_TWO = `https://api.github.com/users/${repoTwoInput.value}/repos`
  const API_REPO_ONE_AVATAR = `https://api.github.com/users/${repoOneInput.value}`
  const API_REPO_TWO_AVATAR = `https://api.github.com/users/${repoTwoInput.value}`

  fetch(API_REPO_ONE).then((response) => {return response.json()}).then((dataOne)=>{
  fetch(API_REPO_ONE_AVATAR).then((response)=>{return response.json()}).then((dataOneImage)=>{let avatarOne = dataOneImage.avatar_url
  fetch(API_REPO_TWO).then((response) => {return response.json()}).then((dataTwo)=>{
  fetch(API_REPO_TWO_AVATAR).then((response)=>{return response.json()}).then((dataTwoImage)=>{let avatarTwo = dataTwoImage.avatar_url
    if(dataOne.length > dataTwo.length ){
      theContainer.innerHTML = 
      `
        <h1>The Winner is:</h1>
        <h3>${repoOneInput.value}</h3>
        <img src="${avatarOne}" alt="">
        <h1>The Loser is:</h1>
        <h3>${repoTwoInput.value}</h3>
        <img src="${avatarTwo}" alt="">
      `
      }
    else{
      theContainer.innerHTML = 
      `
        <h1>The Winner is:</h1>
        <h3>${repoTwoInput.value}</h3>
        <img src="${avatarTwo}" alt="">
      `
          }
        })
      })
    })
  })
}}