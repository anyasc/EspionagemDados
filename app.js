const key = "09cb48c988e64b9bab11aa23eee42fab";

const ipInfo = document.getElementById("ip-info"),
userInfo = document.getElementById("user-info");
document.addEventListener("DOMContentLoaded", function() {
    //getIP();
    //getUserAgent();
  });

const getIP = () => {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${key}/`) 
        .then(res => res.json())
        .then(data => showIpInfo(data))
        .catch(err => console.log("err"))
}

const getUserAgent = () => {
    fetch(`https://api.ipgeolocation.io/user-agent?apiKey=${key}`)
    .then(res => res.json())
    .then(data => showUserInfo(data))
    .catch(err => console.log("err"))
}



const showIpInfo = data => {
    let ip = data.ip,
    country = data.country_name == 'Brazil' ? 'Brasil' : data.country_name,
    city = data.city;

    ipInfo.innerText = 
    `Seu endereço de IP é ${ip}. Seu país é ${country} e você está na cidade ${city}.`
}

const showUserInfo = data => {
    let browser = data.name,
    version = data.version,
    deviceType = data.device.type,
    os = data.operatingSystem.name;

    userInfo.innerText = `Você está navegando com o ${browser} versão ${version}. Você está usando um ${deviceType} com o sistema operacional ${os}`
}