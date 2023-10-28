let myDiv = document.getElementById("trailer");
//Detect touch device
function isTouchDevice() {
try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
} catch (e) {
    return false;
}
}
const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
} catch (e) {}
  //set left and top of div based on mouse position
myDiv.style.left = x + "px";
myDiv.style.top = y + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
move(e);
});

function updateProgressBar(){
  const {scrollTop, scrollHeight} =
  document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);