// Home Page Loader
import Logo from "./bbq-icon.png";
import { getHeader } from "./header";
export { loadHomePage };

function loadHomePage() {
    const content = document.getElementById("content");
    content.appendChild(getHeader());
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = `
        <div class="container">
            <div class="logo">
            <img src=${Logo} alt="Icon of a bbq grill">
            <span>Backyard BBQ</span>
            </div>
            <div class="description">
            Come to our backyard, crack open a cold one, and enjoy some of the best barbecue this
            world has to offer. It's backyard-to-fork dining, better than you've ever had it.
            </div>
        </div>
    `;
    content.appendChild(main);
}