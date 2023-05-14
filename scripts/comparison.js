let repoOneInput = document.querySelector('.first-repo-inp')
let repoTwoInput = document.querySelector('.second-repo-inp')
let FetchBtn = document.querySelector('.btn')
let firstRepoCounter = 0
let secondRepoCounter = 0

FetchBtn.onclick = function(){
  if(repoOneInput.value =='' || repoTwoInput.value == ''){
    alert('please fill the fields with valid info')
  }

  else{
  // Start Repo One
  const API_REPO_ONE = `https://api.github.com/users/${repoOneInput.value}/repos`

  fetch(API_REPO_ONE)
  .then((response) => {return response.json()})
  .then((dataOne)=>{
    console.log(dataOne)
    for(let i = 0; i < dataOne.length; i++){
      firstRepoCounter++
    }
  })
// Finished Repo One

// Start Repo Two
const API_REPO_Two = `https://api.github.com/users/${repoTwoInput.value}/repos`

fetch(API_REPO_Two)
.then((response) => {return response.json()})
.then((dataTwo)=>{
  for(let i = 0; i < dataTwo.length; i++){
    secondRepoCounter++
  }
})
// Finished Repo Two
if(firstRepoCounter > secondRepoCounter){
  alert('First One Won')
  }else{alert('Second Repo Won')}
}
}




