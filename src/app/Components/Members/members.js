
const members_slider =() =>{


document.querySelectorAll('.members-box').forEach(box => {
    const clc = box.querySelector(".members-cancel");
    const arr = box.querySelector(".members-arr_container");
    const left_container = box.querySelector(".members-left_container");
  
    arr.addEventListener("click", () => {
      arr.classList.add("members-active_arr");
      if (left_container.classList.contains("members-off")) {
        left_container.classList.remove("members-off");
        left_container.classList.add("members-active");
      }
    });
  
    clc.addEventListener("click", () => {
      arr.classList.remove("members-active_arr");
      if (left_container.classList.contains("members-active")) {
        left_container.classList.remove("members-active");
        left_container.classList.add("members-off");
      }
    });
});
}

module.exports = {
    members_slider,
}