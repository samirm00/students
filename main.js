// Imports
import getRandomNumber from './utils/getRandomNumber.js';
import createStudent from './components/createStudent.js';
import updateStudent from './components/updateStudent.js';

// DOM elements
const root = document.getElementById('root');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const students = [
    {
        name: 'Erwin',
        occupation: 'Business Analyst',
        avatar: './img/cat.jpeg',
    },
    {
        name: 'Khalid',
        occupation: 'Software engineer',
        avatar: './img/cat.jpeg',
    },
    {
        name: 'Milena',
        occupation: 'Russian teacher',
        avatar: './img/cat.jpeg',
    },
    {
        name: 'Komal',
        occupation: 'UX and UI designer',
        avatar: './img/cat.jpeg',
    },
    {
        name: 'Cris',
        occupation: 'Junior Web Developer',
        avatar: './img/cat.jpeg',
    },
];
const studentsLength = students.length;

// render a user by default
let randomNumber = getRandomNumber(studentsLength);
const currentUser = students[randomNumber];
const userDom = createStudent(currentUser);
root.append(userDom);

// Handlers
const renderNextStudent = () => {
    randomNumber++;
    if (randomNumber > students.length - 1) {
        randomNumber = 0;
    }

    const nextUser = students[randomNumber];
    updateStudent(nextUser);
};

const renderPreviousStudent = () => {
    randomNumber--;
    if (randomNumber < 0) {
        randomNumber = studentsLength - 1;
    }

    const previousUser = students[randomNumber];
    updateStudent(previousUser);
};

// Listeners
next.addEventListener('click', renderNextStudent);
previous.addEventListener('click', renderPreviousStudent);
