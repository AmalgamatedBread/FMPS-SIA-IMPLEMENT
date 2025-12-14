// portfolios.js - Tab Switching Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = {
        personal: document.getElementById('personal-content'),
        department: document.getElementById('department-content'),
        archive: document.getElementById('archive-content'),
        shared: document.getElementById('shared-content')
    };
    
    const breadcrumbLocation = document.getElementById('current-location');
    const departmentFilter = document.getElementById('department-filter');
    
    // Initialize all tabs
    function initializeTabs() {
        // Hide all tab contents first
        Object.values(tabContents).forEach(content => {
            if (content) content.style.display = 'none';
        });
        
        // Show personal tab by default
        if (tabContents.personal) {
            tabContents.personal.style.display = 'block';
        }
        
        // Set active tab
        tabButtons.forEach(btn => {
            if (btn.classList.contains('active')) {
                const tabName = btn.getAttribute('data-tab');
                updateBreadcrumb(tabName);
                updateDepartmentFilter(tabName);
            }
        });
    }
    
    // Tab click event listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            Object.values(tabContents).forEach(content => {
                if (content) content.style.display = 'none';
            });
            
            // Show selected tab content
            if (tabContents[tabName]) {
                tabContents[tabName].style.display = 'block';
            }
            
            // Update breadcrumb
            updateBreadcrumb(tabName);
            
            // Show/hide department filter
            updateDepartmentFilter(tabName);
        });
    });
    
    // Update breadcrumb based on selected tab
    function updateBreadcrumb(tabName) {
        const tabNames = {
            personal: 'My Portfolios',
            department: 'Department Portfolios',
            archive: 'College Archive',
            shared: 'Shared with Me'
        };
        
        if (breadcrumbLocation && tabNames[tabName]) {
            breadcrumbLocation.textContent = tabNames[tabName];
        }
    }
    
    // Show/hide department filter
    function updateDepartmentFilter(tabName) {
        if (departmentFilter) {
            if (tabName === 'department') {
                departmentFilter.style.display = 'block';
            } else {
                departmentFilter.style.display = 'none';
            }
        }
    }
    
    // Department filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter department content (you'll need to implement actual filtering)
            const dept = this.getAttribute('data-dept');
            filterDepartmentContent(dept);
        });
    });
    
    // Filter department content (placeholder - implement based on your data)
    function filterDepartmentContent(department) {
        console.log('Filtering by department:', department);
        // Implement your filtering logic here
    }
    
    // Initialize when page loads
    initializeTabs();
    
    // Modal functionality (existing)
    const uploadBtn = document.getElementById('upload-btn');
    const createFolderBtn = document.getElementById('create-folder-btn');
    const uploadModal = document.getElementById('upload-modal');
    const folderModal = document.getElementById('folder-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    if (uploadBtn && uploadModal) {
        uploadBtn.addEventListener('click', () => {
            uploadModal.classList.add('active');
        });
    }
    
    if (createFolderBtn && folderModal) {
        createFolderBtn.addEventListener('click', () => {
            folderModal.classList.add('active');
        });
    }
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            uploadModal.classList.remove('active');
            folderModal.classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === uploadModal) {
            uploadModal.classList.remove('active');
        }
        if (event.target === folderModal) {
            folderModal.classList.remove('active');
        }
    });
});