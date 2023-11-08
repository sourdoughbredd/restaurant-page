export { loadMenu };

// Menu item object factory
function createMenuItem(name, price) {
    return { name, price };
}


// Function that returns the menu items
function getMenuItems() {
    const Beef = [
        createMenuItem('Brisket', '$12/lb'),
        createMenuItem('Brisket Sandwich', '$16/each'),
        createMenuItem('Dino Rib', '$20/each')
    ]
    const Pork = [
        createMenuItem('Pulled Pork', '$8/lb'),
        createMenuItem('Pulled Pork Sandwich', '$12/each'),
        createMenuItem('Spare Ribs', '$12/half rack'),
    ];
    const Chicken = [
        createMenuItem('Thighs', '$7/lb'),
        createMenuItem('Pulled Chicken Sandwich', '$13/each'),
        createMenuItem('Breast', 'No'),

    ];
    const Turkey = [
        createMenuItem('Leg', '$10/each'),
        createMenuItem('Breast', 'No'),
    ];
    const Beer = [
        createMenuItem('Coors Original', ''),
        createMenuItem('Coors Light', ''),
    ];
    return { Beef, Pork, Chicken, Turkey, Beer };
}


// Function that loads the menu to the page
function loadMenu() {
    const content = document.querySelector("#content");

    // Create main container to match other pages
    const mainContainer = document.createElement("div");
    mainContainer.classList.add('main');
    
    //  Create menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Add menu title
    const menuTitle = document.createElement("h2");
    menuTitle.innerText = "Menu";
    menuContainer.appendChild(menuTitle);

    // Add menu items
    const menuItems = getMenuItems();
    const menuSections = Object.keys(menuItems);
    menuSections.forEach(section => {
        // Setup section div
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-section");
        sectionDiv.id = section.toLowerCase();

        // Add section title
        sectionDiv.innerHTML = `<h3>${section}</h3>`;

        // Add section menu items
        if (section === "Beer") {

            //Add universal beer prices text
            sectionDiv.innerHTML += `
                <div id="beer-price">(
                    <span>Can : $4</span>
                    <span>Bottle : $4.5</span>
                    <span>Draft : $5</span>
                )</div>
            `;

            // Add beer names
            menuItems[section].forEach(item => {

                // Create div to hold name of each beer
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item-info");
                itemDiv.innerHTML += `
                    <div class="item-name">${item.name}</div>
                `;
                // Append item to the section
                sectionDiv.appendChild(itemDiv);
            });
            

        } else {
            // Section other than Beer section

            menuItems[section].forEach(item => {

                // Create div to hold name and price of each item
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item-info");

                // Add item name and price elements
                itemDiv.innerHTML = `
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price}</div>
                `;

                // Append item to the section
                sectionDiv.appendChild(itemDiv);
        
            });   
        }
        // Append section to the menu
        menuContainer.appendChild(sectionDiv);
    });
    
    // Append menu to the page
    mainContainer.appendChild(menuContainer);
    content.appendChild(mainContainer);
} 

