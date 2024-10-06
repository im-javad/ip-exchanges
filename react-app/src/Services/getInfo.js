async function getUserIp() {
  const response = await fetch("https://api.ipify.org?format=json");

  return (await response.json()).ip;
}

async function getUserInfo() {
  const userIp = await getUserIp();

  const response = await fetch(`http://ipwho.is/${userIp}`);

  return await response.json();
}
export default getUserInfo;