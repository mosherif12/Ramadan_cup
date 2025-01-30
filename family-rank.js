// بيانات اللاعبين (بدلًا من قاعدة البيانات، مؤقتًا هنستخدم مصفوفة JSON)
const players = [
    { name: "أحمد", points: [] },
    { name: "محمد", points: [] },
    { name: "خالد", points: [] }
];

// بيانات العبادات التي تم اختيارها
const activities = [
    "صلاة الفجر", "صلاة الشروق", "صلاة الظهر", "قراءة القرآن", "قيام الليل", "الصدقة"
];

// 🔹 1️⃣ حساب **أفضل لاعب اليوم**
function getBestPlayerToday() {
    let todayIndex = new Date().getDay(); // تحديد اليوم الحالي (0-6)
    let bestPlayer = players.reduce((max, player) => (player.points[todayIndex] > max.points[todayIndex] ? player : max), players[0]);
    document.getElementById("best-player").innerText = `${bestPlayer.name} - ${bestPlayer.points[todayIndex]} نقطة`;
}

// 🔹 2️⃣ حساب **أفضل لاعب في الأسبوع**
function getBestWeeklyPlayer() {
    let bestPlayer = players.reduce((max, player) => {
        let totalPoints = player.points.reduce((sum, p) => sum + p, 0); // جمع نقاط الأسبوع
        return totalPoints > max.total ? { name: player.name, total: totalPoints } : max;
    }, { name: "", total: 0 });

    document.getElementById("best-weekly-player").innerText = `${bestPlayer.name} - ${bestPlayer.total} نقطة`;
}

// 🔹 3️⃣ تحديث **جدول الترتيب العام**
function updateLeaderboard() {
    let tableBody = document.getElementById("leaderboard");
    tableBody.innerHTML = ""; // مسح البيانات القديمة

    let sortedPlayers = players.map(player => ({
        name: player.name,
        total: player.points.reduce((sum, p) => sum + p, 0)
    })).sort((a, b) => b.total - a.total); // ترتيب من الأعلى للأقل

    sortedPlayers.forEach((player, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.total}</td>
            <td><button onclick="showPlayerDetails('${player.name}')">عرض</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// 🔹 4️⃣ حساب **أكثر العبادات اختيارًا**
function getMostSelectedActivities() {
    let activityCounts = activities.map(activity => ({
        name: activity,
        count: Math.floor(Math.random() * 50) // محاكاة عدد مرات اختيار كل عبادة
    })).sort((a, b) => b.count - a.count); // ترتيب العبادات من الأكثر إلى الأقل

    let activityList = document.getElementById("top-activities");
    activityList.innerHTML = "";
    activityCounts.forEach(activity => {
        activityList.innerHTML += `<li>${activity.name} - ${activity.count} مرة</li>`;
    });
}

// 🔹 5️⃣ إظهار تفاصيل اللاعب عند الضغط على الزر
function showPlayerDetails(playerName) {
    let player = players.find(p => p.name === playerName);
    if (player) {
        let total = player.points.reduce((sum, p) => sum + p, 0);
        alert(`📌 تفاصيل ${playerName}:\n🔹 مجموع النقاط: ${total}\n🔹 نقاط الأيام: ${player.points.join(", ")}`);
    }
}

// 🔹 تشغيل الدوال عند تحميل الصفحة
window.onload = function() {
    getBestPlayerToday();
    getBestWeeklyPlayer();
    updateLeaderboard();
    getMostSelectedActivities();
};
document.getElementById("جوجل_شيت_جدول").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#f0f0f0";
});

document.getElementById("جوجل_شيت_جدول").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
}); 