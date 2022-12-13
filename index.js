var books =
 [
{ "title": "Css Fundamentals", "author": "Mendel Rosenblum" ,"src":"images/css.jpg", "pdf":"https://web.stanford.edu/class/cs142/lectures/CSS.pdf" },
{ "title": "C Fundamentals", "author": "Tutorial Point","src":"images/C.jpg", "pdf":"https://www.unf.edu/~wkloster/2220/ppts/cprogramming_tutorial.pdf" },
{ "title": "Python Fundamentals", "author": "Guido van Rossum" ,"src":"images/python.png", "pdf":"https://bugs.python.org/file47781/Tutorial_EDIT.pdf"},
{ "title": "Operating System", "author": "Steven Hand" ,"src":"images/os.jpg", "pdf":"https://www.cl.cam.ac.uk/teaching/1011/OpSystems/os1a-slides.pdf"},
{ "title": "Javascript Basics", "author": "Tutorial Point","src":"images/js.png" , "pdf":"https://matfuvit.github.io/UVIT/predavanja/literatura/TutorialsPoint%20JavaScript.pdf"},
{ "title": "Machine Learning", "author": "Alex Smola ", "src":"images/Machine Learning.jpg", "pdf":"https://alex.smola.org/drafts/thebook.pdf" },
{ "title": "C++ Fundamentals", "author": "Bjarne Stroustrup","src":"images/c++.png", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},
{ "title": "Java Fundamentals", "author": "James Gosling", "src":"images/java Fundamentals.png", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},
{ "title": "Deep Learnig", "author": "Ian Goodfellow", "src":"images/dp.jpg", "pdf":"https://alex.smola.org/drafts/thebook.pdf" },
{ "title": "NodeJS Fundamentals", "author": "Ryan Dahl","src":"images/nodejs.png", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},
{ "title": "Computer Networks ", "author": "Andrew", "src":"images/cn.png", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},
{ 
"title": "Dbms", 
"author": "Raghu Ramakrishnan", 
"src":"images/dbms.jpg", 
"pdf":"https://alex.smola.org/drafts/thebook.pdf" },
{ "title": "Competitive Programming", "author": "Steven halim","src":"images/cp.jpg", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},
{ "title": "SQL", "author": "Donald", "src":"images/sql.png", "pdf":"https://alex.smola.org/drafts/thebook.pdf"},


];

var stat = 1;


const update = (e) =>{
  console.log(e.innerHTML);
  if(stat != 1) stat -= 1;
  console.log(stat);
}




var dynamic = document.querySelector('.pagination');
dynamic.innerHTML = `
  <li class="page-item">
  <a id = "prev" class="page-link" href="#" tabindex="-1">Previous</a>
  </li>
`
for(var i = 0;i < books.length/6;i++){
  dynamic.innerHTML += `
    <li class="page-item"><a id = "mid${i+1}" class="page-link mid" href="#"">${i+1}</a></li>
  `
}

dynamic.innerHTML += `
  <li class="page-item">
  <a id ="next" class="page-link" href="#">Next</a>
  </li>
`

var prevbut = document.getElementById("prev");
prevbut.addEventListener('click',(e)=>{
  e.preventDefault();
  if(stat != 1) stat -= 1;
  showBooks(books.slice((stat-1)*6,stat*6));
})


let midbut = document.getElementsByClassName("mid");

for(let i = 0;i < books.length;i++){
  if(midbut[i]){
    midbut[i].addEventListener('click',(e)=>{
      e.preventDefault();
      stat = parseInt(e.target.innerHTML);
      showBooks(books.slice((stat-1)*6,stat*6));
    })
  }
  
}



var nextbut = document.getElementById("next");
nextbut.addEventListener('click',(e)=>{
  e.preventDefault();
  if(stat < books.length/6)stat += 1;
  showBooks(books.slice((stat-1)*6,stat*6));
})





function showBooks(books) {

  var dynamic = document.querySelector('.container');
  dynamic.innerHTML="";
  for (var i = 0; i < books.length; i++) {
    var fetch = document.querySelector('.container').innerHTML;
    
    dynamic.innerHTML = `
    <div  class="card " style="width: 18rem; ">
                
    <div class="card-body">
      <img src="${books[i]["src"]}" class="card-img-top" alt="...">
      <h5 class="card-title">${books[i]["title"]}</h5>
      <p class="card-text">${books[i]["author"]}</p>
      <a href="${books[i]["pdf"]}" target="_blank" class="btn btn-lg btn-dark">View</a>
    </div>
  </div>` + fetch;

  }

}



showBooks(books.slice(0,6));



var searchbutton=document.getElementById("searchinput");
searchbutton.addEventListener("click",(e)=>{
  console.log("clicked");
  e.preventDefault();
  var query=document.getElementById("query");
  console.log(query.value);
  var filteredBooks=[];
  for(var i=0;i<books.length;++i){
    if(books[i]["title"]===query.value || books[i]["author"]===query.value){
      filteredBooks.push(books[i]);
    }
  }
  showBooks(filteredBooks);
})



var filterbutton=document.getElementById("filterbutton");

filterbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    var formEl = document.forms.FilterForm;
    var formData = new FormData(formEl);
    var name = formData.get('Author');
    var title = formData.get('Title');
    console.log(name,title);
})

