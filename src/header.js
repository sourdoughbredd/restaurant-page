import Logo from "./bbq-icon.png";
export { getHeader };

function getHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
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
                <li id="contact-link>Contact</li>
            </ul>
        </nav>
    `;

    return header;
};
