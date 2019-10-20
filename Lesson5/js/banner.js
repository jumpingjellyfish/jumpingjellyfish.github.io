switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
    display=none;
      break;
    case 1:
      day = "Monday";
      display=none;
      break;
    case 2:
       day = "Tuesday";
       display=none;
      break;
    case 3:
      day = "Wednesday";
      display=none;
      break;
    case 4:
      day = "Thursday";
      display=none;
      break;
    case 5:
      day = "Friday";
      display=block;
      break;
    case 6:
      day = "Saturday";
      display=none;

  }
  document.getElementById("reminder").style.display="block"