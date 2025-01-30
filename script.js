// Set the date we're counting down to
const countDownDate = new Date("MAR  1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display some message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const frindCode = "frindx2025";  //كود صفحة الأصدقاء

function validateCode() {
    const userCode = document.getElementById("code").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userCode === frindCode) {
        // إعادة التوجيه إلى صفحة الأصدقاء
        window.location.href = "tartepfrinds.html"; }
else {
        // عرض رسالة خطأ إذا كان الكود غير صحيح
        errorMessage.textContent = "الكود غير صحيح، حاول مرة أخرى.";
    }
}
document.getElementById("closeMessage").addEventListener("click", function() {
  document.getElementById("welcomeMessage").style.display = "none";
}); 