console.log("link main to index working")


const root = document.getElementById("root");
const navBar = new navBar(['home','about','services']);

root.append (navBar.render());