const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//select the section tag to display the items
const sectionCenter = document.querySelector(".section-center");

//function to display the items
function displayMenuItems(theMenu) {
  const menuItems = theMenu
    .map(function (item) {
      return `<article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
        </div>
        </article>`;
    })
    .join("");

  sectionCenter.innerHTML = menuItems;
}

//selecting the button container
const btnContainer = document.querySelector(".btn-container");

//function to fetch, filter and display the buttons
function displayButtons() {
  //setting the btn categories and
  //creating an array of the categories
  const categories = menu.reduce(
    //values == the new array
    //item == individual item in the menu
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const btnCategories = categories
    .map(function (category) {
      //setting the button based on the individual category
      //in the categories array
      return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
    })
    .join("");

  //setting the button container to show the buttons
  btnContainer.innerHTML = btnCategories;

  //select all the buttons
  const filterBtns = document.querySelectorAll(".filter-btn");

  //filtering the menu based on the clicked btn category
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //check the clicked btn for the id as its category
      const category = event.currentTarget.dataset.id;

      //creating a new array by
      //filtering the menu via the categories
      const menuCategory = menu.filter(function (menuItem) {
        //if the category of the menu is equal to the clicked btn
        //return the items on that category
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      //displaying the menu based on the clicked btn
      //displaying all when the clicked btn == "clicked"
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

//when the DOM page loads immediately
//showMenuItem function call
//{takes in an array which is the "menu"}
window.addEventListener("DOMContentLoaded", function () {
  displayButtons();
  displayMenuItems(menu);
});
