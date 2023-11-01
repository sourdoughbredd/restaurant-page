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
                <li>Home</li>
                <li>Menu</li>
                <li>Hours</li>
                <li>Contact</li>
            </ul>
        </nav>
    `;

    return header;
};
