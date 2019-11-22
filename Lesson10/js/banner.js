var d = new Date();
var day = d.getDay();

switch (day) {
    case 0:
        document.getElementById("reminder").style.display="none";
        break;
    case 1:
        document.getElementById("reminder").style.display="none";
        break;
    case 2:
        document.getElementById("reminder").style.display="none";
      break;
    case 3:
        document.getElementById("reminder").style.display="none";
      break;
    case 4:
        document.getElementById("reminder").style.display="none";
      break;
    case 5:
        document.getElementById("reminder").style.display="flex";
      break;
    case 6:
        document.getElementById("reminder").style.display="none";
      break;

  }