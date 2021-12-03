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


// adding to даалгавар 2 

let xhr = new XMLHttpRequest;

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    var news = data.data;
    console.log(news[0].title)
  

    for (let i = 0; i < news.length; i++){
        document.getElementById('cardLoop').innerHTML += ` <div class="col-12 col-md-4 col-style">
        <div class="card latest-card h-100 border-0">
          <img src="${news[i].thumbnail}" class="card-img" alt="...">
          <div class="card-body latest-title d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">${news[i].title}</h5>
              <p class="card-text">${news[i].content.slice(0 , 100)}</p>
            </div>
            <div class="learnmore">
              <a href="blog.html" class="">Learn more&#x2192;</a>
            </div>
          </div>
        </div>
      </div>`
}
}
xhr.open('GET', '../data/company_intro.json')
xhr.send();





