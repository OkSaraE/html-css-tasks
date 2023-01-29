window.addEventListener("scroll", (evt) => {
  // console.log(evt);

  let top = this.pageYOffset;

  // console.log(top);

  let layers = document.querySelectorAll("[data-type='parallax']");
  // console.log(layers);

  let layer, speed, yPos;

  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    let yPos = -((top * speed) / 100);
    layer.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
});

const spacecat = document.querySelector(".wrapper");
const printMouse = document.querySelector("#mouse");
const printMouseCenter = document.querySelector("#mouse-center");
const layerOne = document.querySelector(".layer-1");
const layerTwo = document.querySelector(".layer-2");

document.addEventListener("mousemove", (evt) => {
  let mouseX = evt.clientX,
    mouseY = evt.clientY;

  printMouse.innerHTML = `Yläkulmasta <br> ${mouseX}px ja ${mouseY}px`;

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  let from_center_x = cx - mouseX;
  let from_center_y = cy - mouseY;

  printMouseCenter.innerHTML = `Keskeltä <br> ${from_center_x}px ja ${from_center_y}`;

  layerOne.style.transform =
    "translateX(" +
    from_center_x / 80 +
    "%) translateY(" +
    from_center_y / 70 +
    "%)";

  layerTwo.style.transform =
    "translateX(" +
    from_center_x / 200 +
    "%) translateY(" +
    from_center_y / 140 +
    "%)";
});
