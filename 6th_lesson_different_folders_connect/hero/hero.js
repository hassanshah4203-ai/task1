
// Wait a bit to ensure DOM is ready
setTimeout(function(){
    const exploreBtn = document.getElementById("heroExploreBtn");
    const enrollBtn = document.getElementById("heroEnrollBtn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function(){
            alert("Courses section coming soon!");
        });
    }

    if (enrollBtn) {
        enrollBtn.addEventListener("click", function(){
            window.location.href = "../form/enroll.html";
        });
    }
}, 100);
