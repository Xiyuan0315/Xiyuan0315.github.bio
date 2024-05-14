const vanG = document.getElementById('van_Gogh')
const button = document.getElementById('button')
button.addEventListener('click', hideVanGogh)

function hideVanGogh() {
    if (vanG.style.display === "none") {
        vanG.style.display = "block";
        console.log('should show')
    } else {
        vanG.style.display = "none";
    }
  }