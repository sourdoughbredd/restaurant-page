// Home Page Loader
import Logo from "./bbq-icon.png";
export { loadHomePage };

function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="header">
            <div class="logo">
                <img src=${Logo} alt="Icon of a bbq grill">
                <span>Backyard BBQ</span>
            </div>
            <nav>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Hours</a></li>
                <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="main">
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
        </div>
    `;
}