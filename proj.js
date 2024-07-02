document.getElementById('storybookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const character = document.getElementById('character').value;

    const storyContent = `
        Once upon a time, there was a brave ${character} named ${name}. 
        ${name} went on a magical journey to discover hidden treasures and face incredible adventures.
    `;

    document.getElementById('storybookForm').classList.add('hidden');
    document.getElementById('story').classList.remove('hidden');
    document.getElementById('storyContent').innerText = storyContent;
    document.getElementById('nextButton').classList.remove('hidden');
});

document.getElementById('nextButton').addEventListener('click', function() {
    const additionalStory = `
        As ${name} continued on their journey, they encountered a mysterious forest. 
        Inside the forest, ${name} found an ancient map leading to a hidden treasure.
    `;

    document.getElementById('storyContent').innerText += additionalStory;
    document.getElementById('nextButton').classList.add('hidden');
});
