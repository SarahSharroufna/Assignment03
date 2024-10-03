const jokeCard = document.getElementById('joke-card');
const likedJokesList = [];
const dislikedJokesList = [];
let currentJoke = '';

document.addEventListener('DOMContentLoaded', getJokes);

function getJokes() {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            jokeCard.innerHTML = data.joke;
            currentJoke = data.joke;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function addJokeToLiked() {

    likedJokesList.push(currentJoke);
    console.log('Liked Jokes:', likedJokesList);

    getJokes();
}

function addJokeToDisliked() {

    dislikedJokesList.push(currentJoke);
    console.log('Disliked Jokes:', dislikedJokesList);

    getJokes();
}

function showJokes(type) {

    let message = '';

    if (likedJokesList.length === 0 && dislikedJokesList.length === 0) {
        alert('No jokes to show');
        return;
    }

    if (type === 'liked') {
        message = 'Liked Jokes:\n';
        for (let i = 0; i < likedJokesList.length; i++) {
            message += `${i + 1}. ${likedJokesList[i]}\n`;
        }
    } else if (type === 'disliked') {
        message = 'Disliked Jokes:\n';
        for (let i = 0; i < dislikedJokesList.length; i++) {
            message += `${i + 1}. ${dislikedJokesList[i]}\n`;
        }
    }

    alert(message);
}