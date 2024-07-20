const clock = document.querySelector(".clock");
function runclock() {
  //inbuilt
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var sec = time.getSeconds();
  var txt = "AM";
  if (hrs > 12) {
    hrs = hrs - 12;
    txt = "PM";
  } else if (hrs == 0) {
    hrs = 12;
    txt = "AM";
  }

  clock.innerHTML = `${hrs} : ${mins} : ${sec}`;
}
runclock();
setInterval(runclock, 1000);
