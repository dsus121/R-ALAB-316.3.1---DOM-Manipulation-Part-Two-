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

// step 1
const subMenuEl = document.getElementById("sub-menu")
// step 2
subMenuEl.style.height = "100%";

// step 3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
// step 4
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute"
subMenuEl.style.top = "0";

// Part 4: Adding Menu Interaction
// step 1 - update menuLinks array
const topMenuLinks = document.querySelectorAll('#top-menu a')

// step 2

topMenuEl.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.localName)
    if (e.target.localName !== 'a') return
    if (e.target.className !== 'active') {
        
    }
})
// Part 5: Adding Submenu Interaction
