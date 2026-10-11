// Platzhalter: Eigene Bilder in src/assets/images/ ablegen und hier importieren
import placeholderImage from '../assets/images/project-placeholder.svg';

export interface Project {
  id: string;
  title: string;
  description: string;
  // Namen müssen zu `name` in skills.ts passen
  tags: string[];
  image: string;
  docsUrl: string; // TODO: echten Link eintragen
  githubUrl: string; // TODO: echten Link eintragen
}

const placeholderText =
  'Write some information about the project.\nFor example: Why are you proud of it?\nWhat were you able to implement here?\nWhat different algorithms, server architecture did you use?\nWhy did you find this project so interesting?';

export const projects: Project[] = [
  {
    id: 'baby-tools',
    title: 'Baby Tools',
    description: placeholderText,
    tags: ['HTML', 'CSS'],
    image: placeholderImage,
    docsUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'truck-signs-api',
    title: 'Truck Signs API',
    description: placeholderText,
    tags: ['Python', 'Container'],
    image: placeholderImage,
    docsUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'juice-shop-meister',
    title: 'Juice Shop Meister',
    description: placeholderText,
    tags: ['IT Security', 'Container'],
    image: placeholderImage,
    docsUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    description: placeholderText,
    tags: ['Yaml', 'Shell scripting', 'IT Security', 'Container'],
    image: placeholderImage,
    docsUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'wordpress-hosten',
    title: 'WordPress hosten',
    description: placeholderText,
    tags: ['Container', 'Yaml'],
    image: placeholderImage,
    docsUrl: '#',
    githubUrl: '#',
  },
];
