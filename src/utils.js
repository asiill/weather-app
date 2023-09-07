const getLocalTime = (timeZone) => {
    let date = new Date();
    let time = date.getTime();
    let utc = time + (date.getTimezoneOffset() * 60000);
    let localT = utc + (timeZone * 1000);
    let localDT = new Date(localT);
    let formattedTime = `${localDT.getHours()} h ${localDT.getMinutes()}`;
    console.log(formattedTime);
    return formattedTime;
}

 export default getLocalTime;