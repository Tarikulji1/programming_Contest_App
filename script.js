// let url = "https://codeforces.com/api/contest.list";
// let url = "https://codeforces.com/api/contest.list?gym=true";
let url = "https://codeforces.com/api/contest.ratingChanges?contestId=566";
let response = fetch(url);
// let anotherResponse = Array.from(response);

response.then((value) => {
    return value.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += ` <div class="card" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
          <p class="card-text">${contests[item].durationSeconds}</p>
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">${contests[item].relativeTimeSeconds}</p>
            <p class="card-text">${contests[item].startTimeSeconds}</p>
          </div>
        </div>
        `
    }
    cardContainer.innerHTML = "allCards";
  });




// practice 10
/*
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
if(a){
  localStorage.setItem("note", a)
}

let c = confirm("Do you want to delete your note")
if(c){
  localStorage.removeItem("note")
  alert("Note deleted successfully")
}


*/