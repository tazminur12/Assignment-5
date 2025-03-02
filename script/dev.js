document.addEventListener("DOMContentLoaded", function () {
    const discoverButton = document.getElementById("dis-btn");
    const completeButtons = document.querySelectorAll("button.bg-blue-600");
    const taskAssignedElement = document.querySelector(".p-4.bg-white.rounded-lg.shadow span.text-sm.font-semibold.text-gray-600 + h3");
    const navbarTaskCount = document.querySelector(".text-lg.font-bold");
    const activityLog = document.querySelector(".text-sm.text-gray-600.space-y-2");
    const themeToggle = document.getElementById("theme-toggle");
    const clearHistoryButton = document.querySelector("button.bg-red-600");
    const body = document.body;
    
    let assignedTasks = 6;
    let completedTasks = 0;
    
    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "main.html";
        });
    }

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (assignedTasks > 0) {
                assignedTasks--;
                completedTasks++;
                
                if (taskAssignedElement) {
                    taskAssignedElement.textContent = assignedTasks.toString().padStart(2, "0");
                }
                
                if (navbarTaskCount) {
                    navbarTaskCount.textContent = completedTasks.toString().padStart(2, "0");
                }
                
                this.classList.remove("bg-blue-600");
                this.classList.add("bg-gray-400", "cursor-not-allowed");
                this.textContent = "Completed";
                this.disabled = true;
                
                const logEntry = document.createElement("li");
                logEntry.className = "p-2 bg-white rounded shadow";
                logEntry.innerHTML = `You have completed the task <b>${this.parentElement.querySelector("h3").textContent}</b> at ${new Date().toLocaleTimeString()}`;
                activityLog.appendChild(logEntry);
                
                alert("Board Updated Successfully");
                
                if (assignedTasks === 0) {
                    alert("Congrats!! You have completed all the current tasks.");
                }
            }
        });
    });

    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function () {
            if (activityLog) {
                activityLog.innerHTML = "";
            }
        });
    }

    themeToggle.addEventListener("change", function () {
        body.classList.toggle("bg-gray-900");
        body.classList.toggle("text-white");
    });
});
