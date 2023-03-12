const projects = [
  {
    image: 'images/Snapshoot Portfolio.svg',
    name: 'Tonic',
    client: 'Canopy',
    category: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/project-1-live',
    sourceLink: 'https://github.com/user/project-1',
  },
  {
    image: 'images/project2.jpg',
    name: 'Tonic',
    client: 'Client 2',
    category: 'Mobile Development',
    year: 2022,
    description: 'Praesent vel massa quis mauris vehicula lacinia quis vel mi.',
    technologies: ['React Native', 'Firebase'],
    liveLink: 'https://example.com/project-1-live',
    sourceLink: 'https://github.com/user/project-1',
  },
  {
    image: 'images/project3.jpg',
    name: 'Project 3',
    client: 'Client 3',
    category: 'Mobile Development',
    year: 2015,
    description: 'Praesent vel massa quis mauris vehicula lacinia quis vel mi.',
    technologies: ['React Native', 'Firebase'],
    liveLink: 'https://example.com/project-1-live',
    sourceLink: 'https://github.com/user/project-1',
  },
  {
    image: 'images/project4.jpg',
    name: 'Project 4',
    client: 'Client 4',
    category: 'Mobile Development',
    year: 2012,
    description: 'Praesent vel massa quis mauris vehicula lacinia quis vel mi.',
    technologies: ['React Native', 'Firebase'],
    liveLink: 'https://example.com/project-1-live',
    sourceLink: 'https://github.com/user/project-1',
  },
  // add more projects here...
];

const tonic = projects[0]; // Obtiene el proyecto "Tonic" del arreglo

const tonicHTML = `
  <article>
    <img src="${tonic.image}" alt="${tonic.name}">
    <div class="adjust">
      <div class="leftblock">
        <h2>${tonic.name}</h2>
        <div class="ref">
          <span class="client">${tonic.client}</span>
          <span><i class="fa fa-circle fa-xs"></i></span>
          <span>${tonic.category}</span>
          <span><i class="fa fa-circle"></i></span>
          <span class="year">${tonic.year}</span>
        </div>
        <p class="primarytext">${tonic.description}</p> 
      </div>
      <ul class="tags">
        <li class="tag">${tonic.technologies[0]}</li>
        <li class="tag">${tonic.technologies[1]}</li>
        <li class="tag">${tonic.technologies[2]}</li>
      </ul>
      <div class="ref">
        <button>See project</button>
      </div>
    </div>
  </article>
`;

const projectsContainer = document.getElementById('projects-container');
const tonicContainer = document.createElement('div');
tonicContainer.innerHTML = tonicHTML;

projectsContainer.appendChild(tonicContainer);
