document.addEventListener("DOMContentLoaded", () => {
    // Fetch skills and add them to the skills list
    fetchSkills().then(skills => {
        const skillsList = document.getElementById('skills-list');
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    });
});

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
}

async function fetchSkills() {
    // Simulate fetching skills from the Internet
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Kotlin",
                "Java",
                "C++",
                "C#",
                "Python",
                "Node.js",
                "SQL",
                "JavaScript",
                "React",
                "Angular",
                "MySQL",
                "MongoDB",
                "AWS",
                "Azure"
            ]);
        }, 500);
    });
}

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}
