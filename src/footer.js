import githubLogo from "./github-mark.png";
export { loadFooter };

function loadFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <div>
            Copyright © 2023 sourdoughbredd
            <a href="https://github.com/sourdoughbredd"><img src=${githubLogo} id="github-logo"></a>
        </div>
        <a href="https://www.flaticon.com/free-icons/bbq" title="bbq icons">BBQ icons created by Freepik - Flaticon</a>
        <a href="https://unsplash.com/@emersonvieira" title="bbq photo">BBQ photo created by Emerson Vieira on Unsplash</a>
        `;
};