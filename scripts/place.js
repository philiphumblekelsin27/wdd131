
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
const temp = 8;
const windSpeed = 10;
const calculateWindChill = (t, s) => (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

const displayWindChill = () => {
    const chillElement = document.getElementById("wind-chill");
    if (temp <= 10 && windSpeed > 4.8) {
        chillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
}

displayWindChill();