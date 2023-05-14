let repoOneInput = document.querySelector('.first-repo-inp')
let repoTwoInput = document.querySelector('.second-repo-inp')
let FetchBtn = document.querySelector('.btn')
let theContainer = document.querySelector('.container')
let firstRepoCounter = 0
let secondRepoCounter = 0
var x,y
FetchBtn.onclick = function(){
  if(repoOneInput.value =='' || repoTwoInput.value == ''){
    alert('please fill the fields with valid info')
  }
  else if(repoOneInput.value == repoTwoInput.value){
    alert('You entered the same username TWICE!')
  }
  else{
  // Start Repo One
  const API_REPO_ONE = `https://api.github.com/users/${repoOneInput.value}`

  fetch(API_REPO_ONE)
  .then((response) => {return response.json()})
  .then((dataOne)=>{
    var avatarOne = dataOne.avatar_url

    console.log(dataOne)
    for(let i = 0; i < dataOne.length; i++){
      firstRepoCounter++
    }

// Finished Repo One

// Start Repo Two
const API_REPO_Two = `https://api.github.com/users/${repoTwoInput.value}`

fetch(API_REPO_Two)
.then((response) => {return response.json()})
.then((dataTwo)=>{
  var avatarTwo = dataTwo.avatar_url
  for(let i = 0; i < dataTwo.length; i++){
    secondRepoCounter++
  }
    // Finished Repo Two
  //   if(dataOne.length === dataTwo.length){
  //     alert('Draw')
  // }
    if(firstRepoCounter > secondRepoCounter ){
      theContainer.innerHTML = 
      `
        <h1>The Winner is:</h1>
        <h3>${repoOneInput.value}</h3>
        img src="${avatarOne}" alt="">
      `
      }
      else{
      theContainer.innerHTML = `
      <h1>The Winner is:</h1>
      <h3>${repoTwoInput.value}</h3>
      <img src="${avatarTwo}" alt="">
      `
      }
    })
  })
}
}




