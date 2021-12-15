// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

let nav = document.getElementsByClassName("navbar")[0];
let header = document.getElementById('mainCont');

function scrollDetect(event) {
    let addingEvent = event.target.scrollingElement.scrollTop;
    let high = nav.offsetHeight + header.offsetHeight
    if (addingEvent > high) {
        nav.classList.add('fixed-top')
    } else {
        nav.classList.remove('fixed-top')
    }
}

window.addEventListener('scroll', scrollDetect)


//даалгавар 2 

let xhr = new XMLHttpRequest;

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let news = data.data;
    for (let i = 0; i < news.length; i++) {
        document.getElementById('cardLoop').innerHTML += ` <div class="col-12 col-md-4 col-style">
        <div class="card latest-card h-100 border-0">
          <img src="${news[i].thumbnail}" class="card-img" alt="...">
          <div class="card-body latest-title d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">${news[i].title}</h5>
              <p class="card-text">${news[i].content.slice(0, 100)}</p>
            </div>
            <div class="learnmore">
              <a href="blog.html" class="">Learn more&#x2192;</a>
            </div>
          </div>
        </div>
      </div>`
    }
};
xhr.open('GET', '../data/company_intro.json')
xhr.send();



//даалгавар 3


const finsetModal = new bootstrap.Modal(document.getElementById('modalShow'), {
  backdrop: true,
  keyboard: false
})
console.log(finsetModal)

document.getElementById('modalInput').addEventListener('click', ()=>{
finsetModal.show()
})
document.getElementById('modal-body').innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/XXYlFuWEuKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;




//даалгавар 4

let newsLoop = new XMLHttpRequest;

newsLoop.onload = function () {
    let jsonData = JSON.parse(xhr.responseText);
    let latestVlog = jsonData.data;
    console.log(latestVlog)
    for (let i = 0; i < latestVlog.length; i++) {
        document.getElementById('newsLoop').innerHTML += ` <div class="col-12 col-md-4 col-style">
        <div class="card latest-card h-100 border-0">
          <img src="${latestVlog[i].thumbnail}" class="card-img-top" alt="...">
          <div class="card-body latest-title d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">${latestVlog[i].title}</h5>
              <p class="card-text">${latestVlog[i].content.slice(0, 100)}</p>
            </div>
            <div class="learnmore">
              <a href="#" class="">Learn more&#x2192;</a>
            </div>
          </div>
        </div>
      </div>`
    }
}
newsLoop.open('GET', '../data/posts.json')
newsLoop.send();


