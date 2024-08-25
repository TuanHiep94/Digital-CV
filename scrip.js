// Check Email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailInput = document.getElementById("userEmail");

function checkEmail() {
  if (!regex.test(userEmail.value)) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
    emailInput.focus();
    return false;
  }
  return true;
}

document.getElementById("submitEmail").addEventListener("click", function () {
  const userEmail = emailInput.value;

  if (userEmail === "") {
    alert("Vui lòng nhập email để xem thông tin cá nhân!");
  } else if (checkEmail()) {
    document.querySelector(".hideArea").classList.remove("hide");
    document.querySelector(".emailPrompt").style.display = "none";
  }
});

// Open and Close
document.querySelectorAll(".openBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const content = this.closest(".columnGird").querySelector(
      ".content1, .content2, .content3"
    );
    const boxContainer = this.closest(".box");

    content.classList.toggle("hide");

    if (content.classList.contains("hide")) {
      this.innerHTML = '<i class="fas fa-caret-down"></i>View More';
      boxContainer.style.height = "";
    } else {
      this.innerHTML = '<i class="fas fa-caret-up"></i>View Less';

      const autoHeight = content.scrollHeight + this.scrollHeight + 150;

      boxContainer.style.height = autoHeight + "px";
    }
  });
});
