
const flag = "NSLab_FLAG{SomeTimesCheckingJSCodeHelps}";

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateChallenge() {
  const username = generateRandomString(8);
  const email = `${username}@example.com`;
  const password = generateRandomString(10);

  return {
    username: username,
    email: email,
    password: password
  };
}


function runChallenge() {

  const challenge = generateChallenge();


  const challengeInfo = document.getElementById('challenge-info');
  challengeInfo.innerHTML = `
    <p>Welcome to the Capture the Flag challenge!</p>
    <p>Find the flag by completing the following tasks:</p>
    <p>- Create an account with the following details:</p>
    <p>Username: ${challenge.username}</p>
    <p>Email: ${challenge.email}</p>
    <p>Password: ${challenge.password}</p>
    <p>- Once you've created an account, find the flag in the code!</p>
  `;
  let foundFlag = false;
  function checkFlag() {
    if (foundFlag) {
      alert("Congratulations! You found the flag: " + flag);
    } else {
      alert("Keep looking! You haven't found the flag yet.");
    }
  }

  document.getElementById('check-flag').addEventListener('click', checkFlag);
}

window.onload = runChallenge;
