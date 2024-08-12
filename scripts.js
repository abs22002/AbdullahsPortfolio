document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    fetch('../data/posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            
            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;
            postElement.appendChild(titleElement);
            
            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;
            postElement.appendChild(contentElement);
            
            blogList.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});
