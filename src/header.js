import Logo from "./bbq-icon.png";
export { loadHeader };

function loadHeader() {
    const header = document.querySelector("header");
    header.innerHTML = `
        <div class="logo">
            <img src=${Logo} alt="Icon of a bbq grill">
            <span>Backyard BBQ</span>
        </div>
        <nav>
            <ul>
                <li id="home-link">Home</li>
                <li id="menu-link">Menu</li>
                <li id="hours-link">Hours</li>
            </ul>
        </nav>
    `;
};
