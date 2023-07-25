const logChoose = [
  {
    logName: "Đăng ký",
    formQuestion: "Bạn đã có tài khoản?",
    switchName: "Đăng nhập",
    index: 1,
    display: "flex",
    formName: "form--registered",
  },
  {
    logName: "Đăng nhập",
    formQuestion: "Chưa có tài khoản?",
    switchName: "Đăng ký ngay",
    index: 0,
    display: "none",
    formName: "form--login",
  },
];

let main = document.getElementById("modal");

function modal({
  logName = "",
  formQuestion = "",
  switchName = "",
  index = 0,
  display = "",
  formName = "",
}) {
  let checking = document.getElementById("modal").innerHTML === "";
  console.log(checking);
  if (checking === true) {
    const log = document.createElement("div");
    log.classList.add("modal");
    log.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__body">
      <!-- Auth form -->
      <div class="auth-form">
        <div class="auth__form-container">
          <div class="auth-form__header">
            <h3 class="auth-form__heading">${logName}</h3>
            <span class="auth-form_close-btn" >
              <i class="fa-solid fa-xmark auth-form_close-icon"></i>
            </span>
          </div>
  
          <form class="auth-form__form ${formName}">
            <div class="auth-form__group">
              <input
                type="text"
                class="auth-form__input"
                placeholder="Email của bạn"
                required
              />
            </div>
  
            <div class="auth-form__group">
              <input
                type="password"
                class="auth-form__input"
                placeholder="Mật khẩu của bạn"
                required
              />
            </div>
  
            <div class="auth-form__group" style = 'display: ${display}'>
              <input
                type="password"
                class="auth-form__input"
                placeholder="Nhập lại mật khẩu của bạn"
                required
              />
            </div>
  
            <div class="auth__form-aside" style = 'display: ${display}'>
              <input type="checkbox" class="policy-check"required />
              <div class="auth-form__policy-group">
                <p class="auth__form--policy">
                  Bằng việc <span>${logName}</span>, bạn đã đồng ý với Shopee về
                </p>
                <a class="auth__form--policy auth__form--policy-link" href=""
                  >Điều khoản dịch vụ</a
                >
                <span class="auth__form--policy">&</span>
                <a class="auth__form--policy auth__form--policy-link" href=""
                  >Chính sách bảo mật</a
                >
              </div>
            </div>
  
            <!-- ${logName} -->
            <div class="auth__form-control">
              <input type="submit" class="btn btn--primary btn-full-width auth__form--btn" value="${logName}" />
            </div>
          </form>
          <div class="auth__form-socials">
            <a href="" class="btn btn--with-icon">
              <img src="./assets/img/logo/facebook.png" alt="" />
              Facebook</a
            >
  
            <a href="" class="btn btn--with-icon">
              <img src="./assets/img/logo/google.png" alt="" />
              Google</a
            >
          </div>
  
          <div class="auth__form-log-in">
            <span>${formQuestion}</span><a>${switchName}</a>
          </div>
        </div>
      </div>
    </div>
    `;
    main.appendChild(log);

    let closeBtn = document.querySelector(".auth-form_close-btn");
    closeBtn.addEventListener("click", function () {
      main.removeChild(log);
    });

    let closeOldTab = document.querySelector(".auth__form-log-in a");
    closeOldTab.addEventListener("click", function () {
      main.removeChild(log);
      modal(logChoose[index]);
      document.querySelector(".modal__body").style = "animation: none";
      document.querySelector(".modal").style = "animation: none";
    });
  }
}

const choosedSelect = document.querySelector(".search-box-select span");
const choosedSelectList = ["Trong Shop", "Trên Shopee"];

const selectOptionList = document.getElementsByClassName("option-items");
const selectOptionListLength = selectOptionList.length;
function removeOptionActive() {
  for (let i = 0; i < selectOptionListLength; i++) {
    selectOptionList[i].classList.remove("option-items-active");
  }
}

for (let i = 0; i < selectOptionListLength; i++) {
  selectOptionList[i].addEventListener("click", function (e) {
    removeOptionActive();
    e.currentTarget.classList.add("option-items-active");
    choosedSelect.innerHTML = "";
    choosedSelect.innerHTML = choosedSelectList[i];
  });
}

//

const selectCategoryList = document.getElementsByClassName("category-item");
const selectCategoryListLength = selectCategoryList.length;
function removeCategoryActive() {
  for (let i = 0; i < selectCategoryListLength; i++) {
    selectCategoryList[i].classList.remove("category-item--active");
  }
}

for (let i = 0; i < selectCategoryListLength; i++) {
  selectCategoryList[i].addEventListener("click", function (e) {
    removeCategoryActive();
    e.currentTarget.classList.add("category-item--active");
  });
}

//
const selectInputContent = document.querySelector(".select-input span");
const selectInputList = document.getElementsByClassName("select-input__item");
const choosedInputList = ["Giá: Thấp đến cao", "Giá: Cao đến thấp"];
const selectInputListLength = selectInputList.length;
function removeInputActive() {
  for (let i = 0; i < selectInputListLength; i++) {
    selectInputList[i].classList.remove("select-input__item--active");
  }
}

for (let i = 0; i < selectInputListLength; i++) {
  selectInputList[i].addEventListener("click", function (e) {
    removeInputActive();
    e.target.classList.add("select-input__item--active");
    selectInputContent.innerHTML = "";
    selectInputContent.innerHTML = choosedInputList[i];
  });
}

let productList = document.querySelectorAll(".product-item__like");
for (let i in productList) {
  productList[i].addEventListener("click", function (e) {
    const likeAction = productList[i].classList.contains(
      "product-item__like--liked"
    );
    if (likeAction) {
      productList[i].classList.remove("product-item__like--liked");
    } else {
      productList[i].classList.add("product-item__like--liked");
    }
  });
}
