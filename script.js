// Update time dynamically (including hours, minutes, and seconds)
function updateTime() {
    const timeElement = document.getElementById('time');
    const currentDate = new Date();
  
    // Format waktu dengan detik
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    timeElement.innerHTML = formattedTime;
  }
  
  // Change the color of the box when the button is clicked
  document.getElementById('change-color-btn').addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F4F8', '#FFD700'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('interactive-box').style.backgroundColor = randomColor;
  });
  
  // Update time every second
  setInterval(updateTime, 1000);
  