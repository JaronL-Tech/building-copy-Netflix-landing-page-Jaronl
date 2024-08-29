const tabItems = document.querySelectorAll(".tab-items");
const tabContentItems = document.querySelectorAll(".tab-content-items");

function selectItem(e) {
  removeBorder();
  this.classList.add("tab-border");
}

tabItems.forEach((item) => addEventListener("click", selectItem));
