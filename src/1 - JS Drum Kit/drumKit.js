window.addEventListener('keydown', function (e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.replace('border-slate-700', 'border-amber-500');
  key.classList.replace('bg-teal-50', 'bg-grey-700');
  
});
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', () => {
    key.classList.replace('border-amber-500', 'border-slate-700');
    key.classList.replace('bg-grey-700', 'bg-teal-50');
  });
  key.addEventListener('click', () => {
    
    const audio = document.querySelector(
      `audio[data-key="${key.attributes[0].value}"]`
    );
    audio.play();
    key.classList.replace('border-slate-700', 'border-amber-500');
    key.classList.replace('bg-teal-50', 'bg-grey-700');
  });
});
