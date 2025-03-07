const sidebar = [
    {
        "module": "Pre-Admission",
        "icon": "fas fa-user-graduate",
        "options": [
            {
                "option": "Eligibility Check",
                "icon": "fas fa-check-circle",
                "subOptions": [
                    { "name": "Academic Requirements", "link": "/eligibility/academic.html" },
                    { "name": "Age Limit", "link": "/eligibility/age.html" },
                    { "name": "Language Settings", "link": "/eligibility/language.html" }
                ]
            },
            {
                "option": "Application Submission",
                "icon": "fas fa-paper-plane",
                "subOptions": [
                    { "name": "Online Application", "link": "/application/online.html" },
                    { "name": "Document Management", "link": "/application/document.html" },
                    { "name": "Fee Management", "link": "/application/fee.html" }
                ]
            },
            {
                "option": "Interview Process",
                "icon": "fas fa-microphone",
                "subOptions": [
                    { "name": "Virtual", "link": "/interview/virtual.html" },
                    { "name": "In Person", "link": "/interview/in-person.html" },
                    { "name": "Panel Reviews", "link": "/interview/panel.html" }
                ]
            },
            {
                "option": "Pre-Admit Counseling",
                "icon": "fas fa-comments",
                "subOptions": [
                    { "name": "Virtual", "link": "/interview/virtual.html" },
                    { "name": "Upcoming", "link": "/counselling/upcoming.html" },
                    { "name": "Reviews & Results", "link": "/counselling/review.html" }
                ]
            }
        ]
    },
    // New modules after Pre-Admission
    {
        "module": "Attendance Management",
        "icon": "fas fa-calendar-check",
        "options": [
            {
                "option": "Attendance Overview",
                "icon": "fas fa-users",
                "subOptions": [
                    { "name": "Class Attendance", "link": "/attendance/class.html" },
                    { "name": "Teacher Attendance", "link": "/attendance/teacher.html" },
                    { "name": "Holiday Management", "link": "/attendance/holidays.html" }
                ]
            },
            {
                "option": "Leave Management",
                "icon": "fas fa-calendar-day",
                "subOptions": [
                    { "name": "Apply for Leave", "link": "/attendance/leave-apply.html" },
                    { "name": "Leave Approvals", "link": "/attendance/leave-approvals.html" }
                ]
            }
        ]
    },
    {
        "module": "Exam Management",
        "icon": "fas fa-file-alt",
        "options": [
            {
                "option": "Exam Schedule",
                "icon": "fas fa-calendar-alt",
                "subOptions": [
                    { "name": "View Exam Schedule", "link": "/exams/schedule.html" },
                    { "name": "Download Timetable", "link": "/exams/download-timetable.html" }
                ]
            },
            {
                "option": "Exam Results",
                "icon": "fas fa-chart-line",
                "subOptions": [
                    { "name": "View Results", "link": "/exams/results.html" },
                    { "name": "Download Results", "link": "/exams/download-results.html" }
                ]
            },
            {
                "option": "Grade Management",
                "icon": "fas fa-star-half-alt",
                "subOptions": [
                    { "name": "Add Grades", "link": "/exams/add-grades.html" },
                    { "name": "View Grade Reports", "link": "/exams/grade-reports.html" }
                ]
            }
        ]
    },
    {
        "module": "Student Portal",
        "icon": "fas fa-user-circle",
        "options": [
            {
                "option": "Profile",
                "icon": "fas fa-id-card",
                "subOptions": [
                    { "name": "View Profile", "link": "/student/profile.html" },
                    { "name": "Edit Profile", "link": "/student/edit-profile.html" }
                ]
            },
            {
                "option": "Course Management",
                "icon": "fas fa-book",
                "subOptions": [
                    { "name": "My Courses", "link": "/student/courses.html" },
                    { "name": "Course Enrollment", "link": "/student/enroll.html" },
                    { "name": "Drop Courses", "link": "/student/drop-courses.html" }
                ]
            },
            {
                "option": "Fee Management",
                "icon": "fas fa-credit-card",
                "subOptions": [
                    { "name": "View Fees", "link": "/student/fees.html" },
                    { "name": "Pay Fees", "link": "/student/pay-fees.html" }
                ]
            }
        ]
    },
    {
        "module": "Hostel Management",
        "icon": "fas fa-bed",
        "options": [
            {
                "option": "Hostel Rooms",
                "icon": "fas fa-home",
                "subOptions": [
                    { "name": "Room Availability", "link": "/hostel/availability.html" },
                    { "name": "Room Assignment", "link": "/hostel/room-assignment.html" }
                ]
            },
            {
                "option": "Hostel Payments",
                "icon": "fas fa-money-bill",
                "subOptions": [
                    { "name": "Pay Hostel Fees", "link": "/hostel/pay-fee.html" },
                    { "name": "View Hostel Charges", "link": "/hostel/view-charges.html" }
                ]
            }
        ]
    },
    {
        "module": "Result Management",
        "icon": "fas fa-chart-bar",
        "options": [
            {
                "option": "Results Overview",
                "icon": "fas fa-tasks",
                "subOptions": [
                    { "name": "View Results", "link": "/results/view.html" },
                    { "name": "Download Results", "link": "/results/download.html" }
                ]
            },
            {
                "option": "Grades",
                "icon": "fas fa-graduation-cap",
                "subOptions": [
                    { "name": "Add Grades", "link": "/results/add-grades.html" },
                    { "name": "Grade Reports", "link": "/results/grade-reports.html" }
                ]
            }
        ]
    },
    {
        "module": "Library Management",
        "icon": "fas fa-book-open",
        "options": [
            {
                "option": "Book Search",
                "icon": "fas fa-search",
                "subOptions": [
                    { "name": "Search Books", "link": "/library/search.html" },
                    { "name": "View Book Catalog", "link": "/library/catalog.html" }
                ]
            },
            {
                "option": "Book Issue/Return",
                "icon": "fas fa-undo",
                "subOptions": [
                    { "name": "Issue Book", "link": "/library/issue-book.html" },
                    { "name": "Return Book", "link": "/library/return-book.html" }
                ]
            }
        ]
    },
    {
        "module": "Financial Aid and Scholarships",
        "icon": "fas fa-money-bill-wave",
        "options": [
            {
                "option": "Scholarships",
                "icon": "fas fa-trophy",
                "subOptions": [
                    { "name": "View Scholarships", "link": "/financial-aid/scholarships.html" },
                    { "name": "Apply for Scholarships", "link": "/financial-aid/apply-scholarship.html" }
                ]
            },
            {
                "option": "Loans",
                "icon": "fas fa-credit-card",
                "subOptions": [
                    { "name": "View Loan Options", "link": "/financial-aid/loans.html" },
                    { "name": "Apply for Loan", "link": "/financial-aid/apply-loan.html" }
                ]
            }
        ]
    }
];


    window.onload = function() {
        const sidebarContainer = document.getElementById('sidebar');
        // Apply CSS styles dynamically to the sidebar container
    sidebarContainer.style.maxHeight = "80vh";
    sidebarContainer.style.overflowY = "scroll";
        sidebar.forEach(module => {
            const moduleDiv = document.createElement('div');
            moduleDiv.classList.add('space-y-2');
            const moduleTitle = document.createElement('h3');
            moduleTitle.classList.add('text-lg','border-b','border-gray-200', 'font-semibold', 'text-gray-300');
            moduleTitle.innerHTML = `<i class="${module.icon}"></i> ${module.module}`;
            moduleDiv.appendChild(moduleTitle);
            const optionsList = document.createElement('ul');
            module.options.forEach(option => {
                const optionItem = document.createElement('li');
                optionItem.classList.add('text-gray-400', 'cursor-pointer','py-2');
                optionItem.innerHTML = `<i class="${option.icon}"></i> ${option.option}`;
                
                const subOptionsList = document.createElement('ul');
                subOptionsList.classList.add('pl-4', 'space-y-2', 'max-h-0','py-1', 'overflow-hidden', 'transition-all', 'duration-300', 'ease-in-out');
                option.subOptions.forEach(subOption => {
                    const subOptionItem = document.createElement('li');
                    subOptionItem.classList.add('text-gray-500', 'hover:text-red-500');
                    subOptionItem.innerHTML = `<a href="${subOption.link}">- ${subOption.name}</a>`;  // Add link here
                    subOptionsList.appendChild(subOptionItem);
                });
    
                // Add event listener to toggle the visibility of sub-options with animation
                optionItem.addEventListener('click', function() {
                    subOptionsList.classList.toggle('max-h-0');
                    subOptionsList.classList.toggle('max-h-[500px]');  // Adjust this value as needed
                });
    
                optionItem.appendChild(subOptionsList);
                optionsList.appendChild(optionItem);
            });
            moduleDiv.appendChild(optionsList);
            sidebarContainer.appendChild(moduleDiv);
        });
    };
    
