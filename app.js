const photo = document.querySelector("#photo");
const fullname = document.querySelector("#name");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const city = document.querySelector("#city");
const gender = document.querySelector("#gender");
const file = document.querySelector("#file");
const form = document.querySelector("#webform");

const showIError = (input, msg) => {
  const x = input.parentElement; // Refers <div class="field-icontrol">
  x.classList.remove("isuccess"); // Refers .form-control.isuccess class
  x.classList.add("ierror"); //Refers .form-control.ierror class
  const error = x.querySelector("span"); //Refers <span>
  error.textContent = msg; // Assign error message
};

const showISuccess = (input) => {
  const x = input.parentElement; // Refers <div class="field-icontrol">
  x.classList.add("isuccess"); // Refers .form-control.isuccess class
  x.classList.remove("ierror"); //Refers .form-control.ierror class
  const error = x.querySelector("span"); //Refers <span>
  error.textContent = ""; // Remove error messages
};

const showSError = (select, msg) => {
  const x = select.parentElement;
  x.classList.remove("ssuccess");
  x.classList.add("serror");
  const error = x.querySelector("span");
  error.textContent = msg;
};

const showSSuccess = (select) => {
  const x = select.parentElement;
  x.classList.add("ssuccess");
  x.classList.remove("serror");
  const error = x.querySelector("span");
  error.textContent = "";
};

const showFError = (fieldset, msg) => {
  const x = fieldset.parentElement;
  x.classList.remove("fsuccess");
  x.classList.add("ferror");
  const error = x.querySelector("span");
  error.textContent = msg;
};

const showFSuccess = (fieldset) => {
  const x = fieldset.parentElement;
  x.classList.add("fsuccess");
  x.classList.remove("ferror");
  const error = x.querySelector("span");
  error.textContent = "";
};

const checkPhoto = () => {
  const Photo = photo.value;
  if (Photo == "") {
    showIError(photo, "please upload your photo");
  } else {
    showISuccess(photo);
  }
};

const checkFullName = () => {
  const username = fullname.value.trim();
  const min = 3,
    max = 30;
  if (username == "") {
    showIError(fullname, "please enter your name");
  } else {
    var regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(username) === false) {
      showIError(fullname, "only alphabets are allowed");
    } else if (username.length < 3 || username.length > 30) {
      showIError(
        fullname,
        `name must contain minimum ${min} and maximum ${max} letters`
      );
    } else {
      showISuccess(fullname);
    }
  }
};

const checkDob = () => {
  const Dob = dob.value.trim();
  if (Dob == "") {
    showIError(dob, "please enter your date of birth");
  } else {
    var regExp = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    if (regExp.test(Dob) === false) {
      showIError(dob, "please enter date in the format of dd-mm-yyyy");
    } else {
      showISuccess(dob);
    }
  }
};

const checkEMail = () => {
  const Email = email.value.trim();
  if (Email == "") {
    showIError(email, "please enter your email");
  } else {
    var regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExp.test(Email) === false) {
      showIError(email, "enter a valid email addresss");
    } else {
      showISuccess(email);
    }
  }
};

const checkPhoneNum = () => {
  const PhoneNum = phone.value.trim();
  if (PhoneNum == "") {
    showIError(phone, "please enter your phone number");
  } else {
    var regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(PhoneNum) === true) {
      showIError(phone, "only numbers are allowed");
    } else if (PhoneNum.length < 10) {
      showIError(phone, "please enter a valid 10-digit phone number");
    } else {
      showISuccess(phone);
    }
  }
};

const checkCity = () => {
  const City = city.value.trim();
  if (City == "-- Select --") {
    showSError(city, "please select your city");
  } else {
    showSSuccess(city);
  }
};

const checkGender = () => {
  var Gender = document.getElementsByTagName("input");
  var genderSelected = false;
  for (i = 0; i < Gender.length; i++) {
    if (Gender[i].type === "radio" && Gender[i].checked) {
      genderSelected = true;
    }
    if (!genderSelected) {
      showFError(gender, "please select your gender");
    } else {
      showFSuccess(gender);
    }
  }
};

const checkFile = () => {
  const File = file.value;
  if (File == "") {
    showIError(file, "please upload a file");
  } else {
    showISuccess(file);
  }
};

const debounce = (fun) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fun.apply(null, args);
    }, 300);
  };
};

email.addEventListener(
  "input",
  debounce(function (e) {
    checkEMail();
  })
);

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "photo":
        checkPhoto();
        break;
      case "name":
        checkFullName();
        break;
      case "dob":
        checkDob();
        break;
      case "phone":
        checkPhoneNum();
        break;
      case "city":
        checkCity();
        break;
      case "gender":
        checkGender();
        break;
      case "file":
        checkFile();
        break;
    }
  })
);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isCheckPhoto = checkPhoto();
  const ischeckFullName = checkFullName();
  const ischeckDob = checkDob();
  const ischeckEmail = checkEMail();
  const ischeckPhoneNum = checkPhoneNum();
  const ischeckCity = checkCity();
  const ischeckGender = checkGender();
  const ischeckFile = checkFile();

  if (
    isCheckPhoto &&
    ischeckFullName &&
    ischeckDob &&
    ischeckEmail &&
    ischeckPhoneNum &&
    ischeckCity &&
    ischeckGender &&
    ischeckFile
  ) {
  }

  const getDetails = () => {
    var photo = document.getElementById("photo").value;
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var file = document.getElementById("file").value;

    var Gender = document.getElementsByTagName("input");
    for (i = 0; i < Gender.length; i++) {
      if (Gender[i].type === "radio" && Gender[i].checked) {
        var gender = Gender[i].value;
      }
    }

    var Hobbies = []; //pushing checkboxes values into the hobbies array
    var checkboxes = document.getElementsByName("hobbies");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        Hobbies.push(checkboxes[i].value);
        var hobbies = Hobbies.join(", ");
      }
    }
     if (
      photo == "" ||
      name == "" ||
      dob == "" ||
      email == "" ||
      phone == "" ||
      city == "" ||
      file == "" ||
      gender == "" ||
      hobbies == ""
    ) {
      alert("please fill out all the form details");
    } else {
    alert(
      "You have been entered the following details\n" +
        "Photo Name = " +
        photo +
        "\n" +
        "Full Name = " +
        name +
        "\n" +
        "Date of Birth = " +
        dob +
        "\n" +
        "E-mail = " +
        email +
        "\n" +
        "Phone Number = " +
        phone +
        "\n" +
        "City = " +
        city +
        "\n" +
        "Gender = " +
        gender +
        "\n" +
        "Hobbies = " +
        hobbies +
        "\n" +
        "File Name = " +
        file
    );
  };
  };
  getDetails();
  document.getElementById("webform").reset();
});
