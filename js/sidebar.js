function populateSidebar() {
    const sidebar = document.getElementById('sidebar-content');
    const headers = document.querySelectorAll('.post__content h2');
    headers.forEach((header, index) => {
      // Ensure each header has a unique id
      if (!header.id) {
        header.id = `header-${index}`;
      }
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${header.id}`;
      link.innerText = header.id;
      listItem.appendChild(link);
      sidebar.appendChild(listItem);
    });

    // Add click event listeners to highlight the selected item
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            links.forEach(l => l.classList.remove('active'));
            links.forEach(l => l.parentElement.classList.remove('active'));

            // Add the active class to the clicked link and its parent li
            this.classList.add('active');
            this.parentElement.classList.add('active');
        });
    });
}

// Call the functions on page load
window.onload = () => {
    populateSidebar();
};