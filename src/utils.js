const getLocalTime = (timeZone) => {
    let date = new Date();
    let time = date.getTime();
    let utc = time + (date.getTimezoneOffset() * 60000);
    let localT = utc + (timeZone * 1000);
    let localDT = new Date(localT);

    let hours = localDT.getHours();
    hours = (hours < 10 ? "0" : "") + hours;
    let minutes = localDT.getMinutes();
    minutes = (minutes < 10 ? "0" : "") + minutes;

    let formattedTime = `${hours} h ${minutes}`;
    return formattedTime;
}

 export default getLocalTime;