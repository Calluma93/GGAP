// Return a list (path) of menu pages which have active items
export const getActivePath = (navPage) => {
    var activePath = [];
    (function lookIn(navPage) {
        // If this page has any active items, add it to the path
        if (navPage.sideNavItems.some(item => item.active)) {
            activePath.push(navPage);
            // For any items that are active and have sub menu pages, repeat the proccess
            navPage.sideNavItems.forEach(thisItem => {   
                if (thisItem.active && thisItem.subSideNavPage) {
                    lookIn(thisItem.subSideNavPage);
                }
            });
        }
    })(navPage);
    return activePath;
};