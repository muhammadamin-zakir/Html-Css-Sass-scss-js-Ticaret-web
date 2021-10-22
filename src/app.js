const minusBtn = document.querySelector(".minus");
const countValue = document.querySelector(".value");
const plusBtn = document.querySelector(".plus");

const menuBtn = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const toggleClass = document.querySelector(".toggle-class");
// const menuChecked = document.querySelector(".menu-checked");

const shopBtn = document.querySelector(".shop-btn");
const ourCart = document.querySelector(".cart");
const checkedx = document.querySelector(".checked");


const addtocart = document.querySelector(".alink");
const addAllCart = document.querySelector(".all-cart");
const itemLists = document.querySelectorAll(".item-list");
const trash = document.querySelector(".trash");
const thumbİmg = document.querySelectorAll(".thumbnail-image");


const imgList = document.querySelectorAll(".small-img-list");
const bigİmg = document.querySelector(".big-img-change");

const nvbtns = document.querySelectorAll(".nvbtn");

let bigİmgStorage;
let imageLink;
let truefalse = false;
let shopscale = true;
let menuscale = true;

addEventListeners();


function addEventListeners() {
    minusBtn.addEventListener("click", (e) => {

        if (countValue.innerHTML != 1) {
            countValue.innerHTML -= 1;
        }

        e.preventDefault();
    });
    plusBtn.addEventListener("click", (e) => {
        countValue.innerHTML = parseInt(countValue.innerHTML) + 1;

        e.preventDefault();
    });

    menuBtn.addEventListener("click", (e) => {
        // navbar.classList.toggle("toggle-class");

        if (menuscale) {
            navbar.style.transform = "scaleY(1)";
            navbar.style.transition = "300ms all";
            menuscale = false;

        } else {
            navbar.style.transform = "scaleY(0)";
            menuscale = true;
        }

        e.preventDefault();
    });

    shopBtn.addEventListener("click", (e) => {
        // document.querySelector(".another-name").classList.toggle("checked");
        if (shopscale) {
            checkedx.style.transform = "scaleY(1)";
            shopscale = false;
        } else {
            checkedx.style.transform = "scaleY(0)";
            shopscale = true;
        }
        e.preventDefault();
    });


    addtocart.addEventListener("click", (e) => {

        bigİmgStorage = bigİmg.getAttribute("src");
        console.log(bigİmgStorage);

        e.preventDefault();
        addAllCart.innerHTML += `
        <div class="item-list">
        <ul>
          <li><img src="${bigİmgStorage}"></li>
          <li>$125.00x<span>${parseInt(countValue.textContent)}</span>=$<span>${125.00 * parseInt(countValue.textContent)}</span></li>
        </ul>
        <img src="/images/icon-delete.svg" alt="" class="trash">
      </div>`

        addToShopList(addAllCart);
    });


    thumbİmg.forEach((item, key) => {
        item.addEventListener("click", (e) => {
            imageLink = `/images/image-product-${key + 1}.jpg`
            bigİmg.setAttribute("src", imageLink);
            e.preventDefault();
        })
    })

    nvbtns.forEach((nvbtn, key) => {
        nvbtn.addEventListener("click", e => {
            console.log("clicked: " + key);

            for (var i = 0; i < nvbtns.length; i++) {
                nvbtns[i].classList.remove("seleceted");

            }

            nvbtn.className = "seleceted";

            e.preventDefault();
        })
    })

}

function addToShopList(item) {
    item.addEventListener("click", e => {
        if (e.target.classList.contains("trash")) {
            e.target.parentElement.remove()
        }
    })
}


