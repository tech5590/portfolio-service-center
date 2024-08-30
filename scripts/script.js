function isDayOff (start, finish, message) {
  let news = document.getElementById("news-message");
  const currentDate = new Date();
  const startDate = new Date(start);
  const finishDate = new Date(finish);

  if ((startDate < currentDate) && (currentDate < finishDate)) {
    news.innerHTML = message;
  }
}

isDayOff('February 14, 2024 00:00:01',
         'February 14, 2024 23:59:59',
         'Зміни у роботі: сервісний центр не працює 14.02.2024 р.');


function isMobile() {
  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;

  /* Creating a regular expression
  containing some mobile devices keywords
  to search it in details string*/
  let regexp = /android|iphone|ipad/i;

  /* Using test() method to search regexp in details
  it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    // console.log("You are using a Mobile Device");
    return true;
  } else {
    // console.log("You are using Desktop");
    return false;
  }
}

function isTouchScreenSupport() {
  return ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0) ||
         (navigator.msMaxTouchPoints > 0);
}

function turnOnPhoneNumber(mobile, touch) {
  let phone = document.getElementById("phone-number");

  if (mobile && touch) {
    return phone.setAttribute("href", "tel:+380991234567");
  }
}

turnOnPhoneNumber(isMobile(), isTouchScreenSupport());

// getOffset(elem) finds element top location on page
// https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
// function getOffset(elem) {
//   const rect = elem.getBoundingClientRect();
//   return {
//     left: rect.left + window.scrollX,
//     top: rect.top + window.scrollY
//   };
// }

function showUpButton() {
  let main = document.querySelector(".main");
  let mainTopLocation = main.getBoundingClientRect().top;
  let upButton = document.querySelector(".up-button");

  if (window.scrollY > window.scrollY + mainTopLocation) {
    return upButton.style.display = "block";
  } else {
    return upButton.style.display = "none";
  }
}

window.onscroll = () => {
  showUpButton();
}

// function linkBlink() {
//   let links = document.querySelectorAll(".a-style");

//   for (let i = 0; i < links.length; i++) {
//     links[i].style.background = "#e44d26";
    
//     setTimeout(() => { links[i].style.background = ""; }, (300 + i * 1000 / (i + 1)));
//   }
// }

// linkBlink();


