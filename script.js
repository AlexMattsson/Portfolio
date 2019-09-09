function openUrl() {
  window.open("https://github.com/Axelander3/Programmering2Projekt2");
}

document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);

function toggleSidebar() {
  if (document.getElementById("sidebar-wrapper").style.marginLeft == "0rem") {
    document.getElementById("sidebar-wrapper").style.marginLeft = "-20rem";
    return;
  } else {
    document.getElementById("sidebar-wrapper").style.marginLeft = "0rem";
  }
}
