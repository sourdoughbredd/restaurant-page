import githubLogo from "./github-mark.png";
export { loadFooter };

function loadFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        Copyright © 2023 sourdoughbredd
        <a href="https://github.com/sourdoughbredd"><img src=${githubLogo} id="github-logo"></a>
    `;
};