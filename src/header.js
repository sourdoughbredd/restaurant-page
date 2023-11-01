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
            <li><a href="">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Hours</a></li>
            <li><a href="">Contact</a></li>
            </ul>
        </nav>
    `;

    return header;
};
