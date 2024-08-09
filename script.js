const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    // console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((detl) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = detl.clientX + "px";
    div.style.top = detl.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute("src" , 'https://images.pexels.com/photos/27583783/pexels-photo-27583783/free-photo-of-a-classic-yellow-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

    div.appendChild(img);

    gsap.to(img , {
        y:0,
        ease:Power1,
        duration:.6
    })
    gsap.to(img , {
        y:"100%" ,
        delay:.6,
        ease:Power2,
    })

    document.body.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
