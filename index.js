const accessKey="OPnooO-gSJnGLRoQ0gPleC440RI9SVaHMwI_WT1DijU"

const formEl = document.querySelector("form")
console.log(formEl);
const inputEl= document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore= document.getElementById("show-more-btn")
// const body=document.body

let inputData= ""
let page=1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;


const response = await fetch(url);
const data= await response.json();

const results = data.results;
console.log(results);

if(page===1 && searchResults){

    searchResults.innerHTML ="";
}

results.map((results)=>{
    const imageWrapper= document.createElement('div')
    imageWrapper.classList.add("search-results")
    const image = document.createElement('img')
    image.src = results.urls.small
    image.alt = results.alt_description
    const imageLink = document.createElement('a')
    imageLink.href = results.links.html
    imageLink.target = "_blank"
    imageLink.textContent = results.alt_description

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);

    // imageWrapper.appendChild(imageWrapper);
    
    searchResults.append(imageWrapper)
});

page++
if(page > 1 && showMore){

    showMore.style.display="block"
}
}


formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    page=1;
    searchImages()
})

showMore?.addEventListener("click", (event)=>{
    event.preventDefault()
    page=1;
    searchImages()
})


