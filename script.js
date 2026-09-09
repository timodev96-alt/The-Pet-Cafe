const MoodSelect = document.getElementById('mood-select');
const MoodText = document.getElementById('mood-text');

if (MoodSelectoodSelect) {
  MoodSelect.addEventListener('change', function () {
    if (MoodSelect.value === 'sleepy') {
      MoodText.textContent = "NAP TIME";
    } else if (MoodSelect.value === 'playful') {
      MoodText.textContent = "SHE WANT TO PLAY";
    } else if (MoodSelect.value === 'hungry') {
      MoodText.textContent = "GO GET SOME FOOD FOR THE KITTY";
    } else {
      MoodText.textContent = "We'll greet you once you choose!";
    }
  });
}

const feedBtn = document.getElementById('feed-btn');
const petImg = document.getElementById('pet-img');
const petBubble = document.getElementById('pet-bubble');

if (feedBtn) {
    let fed = false;
    feedBtn.addEventListener('click', function (){
        fed = !fed;
        petImg.src = fed ? 'eating.jpg' : 'sleeping.jpg';
        petBubble.classList.toggle('hidden', !fed); 
    });
}

const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('greeting');

if (nameInput) {
    nameInput.addEventListener('input', function () {
        if (nameInput.value.trim().length > 0) {
            greeting.textContent = nameInput.value +",We can't wait to meet U! ";
        } else {
            greeting.textContent ="We can't wait to meet U!";
        }
    });
}

const form = document.getElementById('form');
const SuccessMessage = document.getElementById('SuccessMessage');
const submitBtn = document.getElementById('submit-btn');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        submitBtn.textContent = "Sending...";
        setTimeout( function () {
            submitBtn.textContent = "Send Application";
            SuccessMessage.classList.remove('hidden');
            form.reset();
            
        }, 1500);
    });
}