export const formatNotificationsDate = (dateString) => {
    const mongoDate = "2024-01-05T07:29:48.986Z";
    const dateObj = new Date(dateString);
  
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const period = hours >= 12 ? "pm" : "am";
  
    // Convert 24-hour format to 12-hour format
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedDate = `${month}, ${day}, ${year}`;
    const formattedTime = ` ${displayHours}:${displayMinutes}${period}`;
  
    console.log(formattedDate); // Output: Sept, 5, 2024, 7:29am
    return { date: formattedDate, time: formattedTime };
  };

  //output : date:Jan, 5, 2024  time:2:29pm