// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

// var menuLinks = [

// step 1
const mainEl = document.querySelector("main");

// step 2
mainEl.style.backgroundColor = "var(--main-bg)";

// step 3
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipultion";

mainEl.appendChild(h1)

// step 4
mainEl.classList.add("flex-ctr");

//part 2
//step 1
const topMenuEl = document.getElementById('top-menu')

//step 2
topMenuEl.style.height = "100%";

//step 3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// step 4
topMenuEl.classList.add('flex-around');

// part 3
// step 1

menuLinks.map(link => {
    //
    const a = document.createElement('a');
    //step 3
    a.href = link.href
    //setep 4
    a.text = link.text
    //step 5
    topMenuEl.appendChild(a)
})

// R-ALAB 316.3.1: DOM Manipulation (Part Two)

//step 1
const subMenuEl = document.getElementById("sub-menu");
//step 2
subMenuEl.style.height = "100%";

// step 3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// step 4
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// part 4
// step 1

const topMenuLinks = document.querySelectorAll("#top-menu a");

// step 2

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.localName !== "a") return;

  if (e.target.className !== "active") {
    e.target.classList.add("active");
    // find the object of the clicked element
    const linkObj = menuLinks.find(
      (link) => link.text === e.target.textContent
    );

    // to select only one active link
    topMenuLinks.forEach((topLink) => {
      if (topLink.textContent !== e.target.textContent)
        // if topLink.textContent is not equal to the textContent of the element that triggered this event to fire
        topLink.classList.remove("active");
      subMenuEl.style.top = "0"; // remove the active class for all of the links EXCEPT the one we clicked on
    });

    if (linkObj.subLinks) {
      subMenuEl.style.top = "100%";
      // using  the helper function to create sub links a elements
      buildSubmenu(linkObj);
    }
  } else {
    e.target.classList.remove("active");
    subMenuEl.style.top = "0";
  }

  // change the dom manipulation text to about if the about link is clicked
  
  if (e.target.textContent === 'about') {
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
}
});

// part 5 -2nd part

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.localName !== "a") return;

  subMenuEl.style.top = "0";
  topMenuLinks.forEach((topLink) => {
    // removing active class from each top menu link
    topLink.classList.remove("active");
  });
  //extracting the link text to update the h1 in main
  const subLinkText = event.target.textContent;
  mainEl.innerHTML = `<h1>${subLinkText
    .charAt(0)
    .toUpperCase()}${subLinkText.slice(1)}</h1>`;

    
});

// HELPER FUNCTION
function buildSubmenu(subLinkObj) {
  subMenuEl.textContent = "";
  subLinkObj.subLinks.map((subLink) => {
    const a = document.createElement("a");
    a.href = subLink.href;
    a.text = subLink.text;
    subMenuEl.appendChild(a);
  });
}

// worked with Fouad, Priyanka, and Bryan