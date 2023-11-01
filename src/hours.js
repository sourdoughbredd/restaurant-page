// Hours Page
import Logo from "./bbq-icon.png";
import { getHeader } from "./header";
export { loadHoursPage };

function loadHoursPage() {
    // Header
    const content = document.getElementById("content");
    content.appendChild(getHeader());

    // Main
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = `
        <div class="hours-container">
            <h2>Hours of Operation</h2>
            <table id="hours-table">
                <tr><th>Sunday</th><td>10am - 7pm</td></tr>
                <tr><th>Monday</th><td>11am - 6pm</td></tr>
                <tr><th>Tuesday</th><td>11am - 6pm</td></tr>
                <tr><th>Wednesday</th><td>11am - 6pm</td></tr>
                <tr><th>Thursday</th><td>11am - 6pm</td></tr>
                <tr><th>Friday</th><td>11am - 6pm</td></tr>
                <tr><th>Saturday</th><td>10am - 7pm</td></tr>
            </table>
        </div>
    `;

    content.appendChild(main);
}