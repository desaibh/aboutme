const portfolioItems = [
  {
    project: 'Html5 Animator',
    website: 'http://desaibh.github.io/Animator',
    github: 'http://www.github.com/desaibh/Animator',
    background: 'images/port-appanimator.gif',
    colorbg: 'rgba(187,169,232,1)',
    color: '#64585cs',
    techUsed: 'React | Express | Node',
    description: [
      'Create and save a wallpaper using a React-based HTML wallpaper builder.',
      'Login to save your work of art.'
    ]
  },
  {
    project: 'Birds of Paradise Match Game',
    website: 'http://desaibh.github.io/Birds-Of-Paradise-Match-Game',
    github: 'http://www.github.com/desaibh/Birds-Of-Paradise-Match-Game',
    background: 'images/port-appbirds.gif',
    colorbg: 'rgba(0,78,110,1)',
    color: '#fda402',
    techUsed: 'React | Express | Node',
    description: [
      'Swap tiles to match 4 or more birds in a row.',
      'Match 9 birds or more for a bonus.'
    ]
  },
  {
    project: 'Bzzylophone',
    website: 'http://desaibh.github.io/Bzzylophone',
    github: 'http://www.github.com/desaibh/Bzzylophone',
    background: 'images/port-appbzzylophone.gif',
    colorbg: 'rgba(91,55,15,1)',
    color: '#c7b9b1',
    techUsed: 'React | Express | Node',
    description: [
      'Learn to play the xylophone from the comfort of your computer.',
      'The app comes complete, with sheet music, to help you gain new skills.',
    ]
  },
  {
    project: 'Checkin App',
    website: 'http://www.herokuapp.com/CheckinApp',
    github: 'http://www.github.com/desaibh/Checkin-App',
    background: 'images/port-appcheckin.gif',
    colorbg: 'rgba(155,154, 159,1)',
    color: '#43322e',
    techUsed: 'React | Express | Node',
    description: [
      'Checkin to pinpoint where you are in the universe.',
      'Scroll down to find things to do there.'
    ]
  },
  {
    project: 'Project Gutenberg',
    website: 'http://desaibh.github.io/Gutenberg',
    github: 'http://www.github.com/desaibh/Gutenberg',
    background: 'images/port-appgutenberg.gif',
    colorbg: 'rgba(16,13,12,1)',
    color: '#97211a',
    techUsed: 'React | Express | Node',
    description: [
      'Look through Project Gutenbergs Top 100 Downloads.',
      'Find your next book for bookclub.'
    ]
  },
  {
    project: 'Itinerant',
    website: 'http://desaibh.github.io/Itinerant',
    github: 'http://www.github.com/desaibh/Itinerant',
    background: 'images/port-appitinerant.gif',
    colorbg: 'rgba(165,186,203,1)',
    color: '#718a9e',
    techUsed: 'React | Express | Node',
    description: [
      'Got time and money, but no place to go?',
      'Here is a flight planning app that fixes that.'
    ]
  },
  {
    project: 'NYC Restaurant Sanitation',
    website: 'http://desaibh.github.io/NYC-Restaurant-Sanitation',
    github: 'http://www.github.com/desaibh/NYC-Restaurant-Sanitation',
    background: 'images/port-apprestaurant.gif',
    colorbg: 'rgba(246,90,63,1)',
    color: '#f5b8a9',
    techUsed: 'React | Express | Node',
    description: [
      'Ever wonder how clean your favorite restaurant is?',
      'Know for sure using this DSNY based restaurant sanitation app.'
    ]
  },
  {
    project: 'My List App',
    website: 'http://portfoliodesai.com/my-list-app.html',
    github: 'http://www.github.com/desaibh',
    background: 'images/port-mylistapp.gif',
    colorbg: 'rgba(127,136,189,1)',
    color: '#5b2c9a',
    techUsed: 'React | Express | Node',
    description: [
      'Review a mockup, showcasing an upcoming List-Making App.',
      ''
    ]
  }
]


const carousel = document.getElementById('carousel');
let project;
let divClass = 0;
let clickHeard = '';

for (var i in portfolioItems) {
  project = document.createElement('div');
  project.classList.add('project');
  project.classList.add(`p${i}`);
  project.style.backgroundImage = `url('${portfolioItems[i].background}')`;
  clickHeard.innerHTML =
    `<div class="projectTitle">
      <h3>${portfolioItems[divClass].project}</h3>
    </div>`;
  carousel.appendChild(project);
}


carousel.addEventListener("click", (e) => {
  clickHeard.innerHTML = "";
  divClass = e.target.className.slice(-1);
  clickHeard ? clickHeard.classList.toggle('active') : clickHeard = '';
  clickHeard = e.target;

  clickHeard.innerHTML =
    `
      <div class="projectTitle">
      </div>
      <div class="projectDescription">
        <div class="projectContent"
             style="background: ${portfolioItems[divClass].colorbg};
                    color: ${portfolioItems[divClass].color}">
          <h3>${portfolioItems[divClass].project}</h3>
          <p>${portfolioItems[divClass].description[0]}
          ${portfolioItems[divClass].description[1]}</p>

          <div class="btns">
            <p style="background: ${portfolioItems[divClass].color};
                   color: ${portfolioItems[divClass].colorbg}">
              <a href="${portfolioItems[divClass].website}" target="_blank">
                  Website
              </a>
            </p>
            <p style="background: ${portfolioItems[divClass].color};
                   color: ${portfolioItems[divClass].colorbg}">
              <a href="${portfolioItems[divClass].github}" target="_blank">
                  Github
              </a>
            </p>
          </div>
        </div>
       </div>
     `;
   clickHeard.classList.toggle('active');
});
