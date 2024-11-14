document.getElementById('submitStory').addEventListener('click', function() {
    const storyInput = document.getElementById('storyInput');
    const storyText = storyInput.value.trim();

    if (storyText) {
        const storyList = document.getElementById('storyList');
        const storyItem = document.createElement('div');
        storyItem.classList.add('story-item');
        storyItem.textContent = storyText;

        storyList.appendChild(storyItem);
        storyInput.value = ''; // Clear the input after submission
    } else {
        alert('Please write something before submitting!');
    }
});

// Search functionality
function searchStories() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const stories = document.querySelectorAll('.story-item');
    
    stories.forEach(story => {
        const text = story.textContent.toLowerCase();
        if (text.includes(input)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}
