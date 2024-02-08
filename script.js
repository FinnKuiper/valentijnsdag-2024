

document.querySelector(".btn").addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.innerHTML = '';
  
    let moon = document.createElement('div');
    moon.className = 'moon';
    document.body.appendChild(moon);
  
    let starsContainer = document.createElement('div');
    starsContainer.className = 'starsContainer';
    document.body.appendChild(starsContainer);

    // get currrent date
    let date = new Date();
    // count how many days have passed since setptember 2021  
    let days = Math.floor((date - new Date('2021-09-01')) / (1000 * 60 * 60 * 24));
  
    for (let i = 0; i < days; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.animationDuration = Math.random() * 3 + 's';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }

    // add text
    document.body.insertAdjacentHTML('beforeend', '<div class="text">1 ster voor elke dag dat ik je ken en elke dag zal er eentje bij komen :)</div>');

    document.body.insertAdjacentHTML('beforeend', '<div class="container"><div class="droplet d-1"></div><div class="droplet d-2"></div><div class="droplet d-3"></div><div class="droplet d-4"></div><div class="droplet d-5"></div><div class="droplet d-6"></div><div class="droplet d-7"></div><div class="droplet d-8"></div><div class="stem"></div></div>');
  });

