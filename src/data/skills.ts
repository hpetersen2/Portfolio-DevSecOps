import htmlIcon from '../assets/icons/icon_html.svg';
import cssIcon from '../assets/icons/icon_css.svg';
import staticsiteGeneratorIcon from '../assets/icons/icon_staticsiteGenerator.svg';
import pythonIcon from '../assets/icons/icon_python.svg';
import shellscriptingIcon from '../assets/icons/icon_shellscripting.svg';
import yamlIcon from '../assets/icons/icon_yaml.svg';
import containerIcon from '../assets/icons/icon_docker.svg';
import cicdIcon from '../assets/icons/icon_CD.svg';
import itsecurityIcon from '../assets/icons/icon_itSecurity.svg';

// \n = Zeilenumbruch wie im Design (die Labels nutzen white-space: pre-line)
export interface Skill {
  name: string; // eindeutiger Name, wird auch in projects.ts als Tag verwendet
  icon: string;
  cardLabel: string; // Label auf der Desktop-Karte
  chipLabel: string; // Label im Projekt-Tag
  shortLabel: string; // Label im mobilen Carousel
  uses: string[]; // "How I used this skills"
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: htmlIcon,
    cardLabel: 'HTML',
    chipLabel: 'HTML',
    shortLabel: 'HTML',
    uses: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    name: 'CSS',
    icon: cssIcon,
    cardLabel: 'CSS',
    chipLabel: 'CSS',
    shortLabel: 'CSS',
    uses: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    name: 'Static site generator',
    icon: staticsiteGeneratorIcon,
    cardLabel: 'Static site\ngenerator',
    chipLabel: 'Static site generator',
    shortLabel: 'Static\nsite',
    uses: [
      'search functionality',
      'static website and customization',
      'tags, categories, and RSS feeds',
      'translation',
    ],
  },
  {
    name: 'Python',
    icon: pythonIcon,
    cardLabel: 'Python',
    chipLabel: 'Python',
    shortLabel: 'Python',
    uses: [
      'Build APIs',
      'spam filtering, recommendation systems',
      'automate software testing',
      'using libraries: Tkinter, Kivy',
    ],
  },
  {
    name: 'Shell scripting',
    icon: shellscriptingIcon,
    cardLabel: 'Shell\nscripting',
    chipLabel: 'Shell\nscripting',
    shortLabel: 'Shell\nscripting',
    uses: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Animations and hover effect',
    ],
  },
  {
    name: 'Yaml',
    icon: yamlIcon,
    cardLabel: 'Yaml',
    chipLabel: 'Yaml',
    shortLabel: 'Yaml',
    uses: [
      'A Kubernetes deployment',
      'database connections',
      'environment-specific variables',
      'complex data structures represent lists and maps',
    ],
  },
  {
    name: 'Container',
    icon: containerIcon,
    cardLabel: 'Container',
    chipLabel: 'Container',
    shortLabel: 'Container',
    uses: [
      'CI/CD pipelines',
      'automate building, testing, deploying applications.',
      'use microservices',
    ],
  },
  {
    name: 'CI/CD with GitHub Actions',
    icon: cicdIcon,
    cardLabel: 'CI/CD with\nGitHub Actions',
    chipLabel: 'CI/CD with GitHub Actions',
    shortLabel: 'CI/CD',
    uses: [
      'Automated builds and tests',
      'pre-built actions',
      'push, pull request, schedule',
      'Automated deployments',
    ],
  },
  {
    name: 'IT Security',
    icon: itsecurityIcon,
    cardLabel: 'IT Security',
    chipLabel: 'IT Security',
    shortLabel: 'IT\nSecurity',
    uses: [
      'simulate attacks and identify vulnerabilities',
      'Setting up multi-factor authentication',
      'login security',
      'Implement authentication & authorization mechanisms',
    ],
  },
];

// Mobile-Carousel: je 3 Skills pro Seite
export const skillSlides: Skill[][] = [
  skills.slice(0, 3),
  skills.slice(3, 6),
  skills.slice(6, 9),
];
