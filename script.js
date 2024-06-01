let optionsB = document.querySelectorAll(".option-button-format");
let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
//ufhdvhdfhdfjvhdf
let scriptButtons = document.querySelectorAll(".script");
//djfhvdkjhdjvhdjvhdjvhdvjdsvkndsvv
//dsnfdsjhdskjvhdjkvhdsjhdsjvdsvdsv
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];
///dsjhvdshjbhdsvhdsjhvbdsvhbdsv
///dsjvhdsjvhdsjvhdsjvbdvjbdsv
const initializer = () => {
  highlighter(optionsB, true);
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  fontName.value = "Verdana";

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsB.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");

  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

const highlighter = (buttons, needsRemoval) => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("clicked");
      if (needsRemoval) {
        let alreadyActive = false;

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(buttons);

        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initializer();
});
