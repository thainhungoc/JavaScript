var days=Number(prompt('nhập vào ngày trong tuần!'));

    switch(days){
       case 2:
            alert('Monday');
            break;
        case 3:
            alert("tuesday");
            break;
          case 4:
            alert("Wednesday");
            break;
          case 5:
            alert("Thursday");
            break;
          case 6:
            alert("Friday");
            break;
          case 7:
            alert("Saturday");
            break;
          case 8:
            alert("Sun");
            break;
          default:
            alert("không hợp lệ");
    }