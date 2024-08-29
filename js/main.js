const tabItems = document.querySelectorAll(".tab-items");
const tabContentItems = document.querySelectorAll(".tab-content-items");

function selectItem(e) {
  removeBorder();
  this.classList.add("tab-border");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

tabItems.forEach((item) => addEventListener("click", selectItem));
