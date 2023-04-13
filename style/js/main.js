let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let preloader = document.getElementById("preloader");

let form = document.getElementsByTagName("form");

console.log(form);

let inputs = [...document.querySelectorAll("input")];
inputs.pop();

console.log(inputs);

let btn = sec1.querySelector(".button button");

btn.addEventListener("click", () => {
  sec1.classList.add("fadeout");
  sec1.style.display = "none";
  sec1.style.opacity = 0;

  sec2.classList.add("fadein");
  sec2.style.display = "flex";
  sec2.style.opacity = 1;
  sec2.scrollIntoView();
});

let submitBtn = sec2.querySelector(".submit");

submitBtn.addEventListener("click", () => {
  let allValid = inputs.every((input) => input.checkValidity());
  if (allValid) {
    sec2.classList.add("fadeout");
    sec2.style.display = "none";
    sec2.style.opacity = 0;

    preloader.classList.add("fadein");
    preloader.style.display = "block";
    preloader.scrollIntoView();

    let time = setTimeout(() => {
      preloader.classList.remove("fadein");
      preloader.classList.add("fadeout");
      preloader.style.display = "none";
      preloader.style.opacity = 0;
    }, 5000);

    inputs.forEach((element) => {
      data = [];
      data.push(element.value);
    });

    // Create element with <a> tag
    const link = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([data], { type: "text/plain" });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = "Data.txt";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);

    sec3.classList.add("fadein");
    sec3.style.display = "flex";
    sec3.style.opacity = 1;
    sec3.scrollIntoView();
  }
});

let logo = document.querySelector(".image img");

logo.addEventListener("click", () => {
  sec1.style.display = "flex";
  sec1.classList = "sec1";
  sec1.style.opacity = 1;
  sec1.scrollIntoView();

  sec2.style.display = "none";
  sec3.style.display = "none";
});
