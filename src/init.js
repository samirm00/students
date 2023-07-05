import './listeners/renderNextStudentListener.js';
import './listeners/renderPreviousStudentListener.js';

import getRandomNumber from './utils/getRandomNumber.js';
import createStudent from './components/createStudent.js';
import data from './data.js';

// show default random student
const root = document.getElementById('root');
let randomNumber = getRandomNumber(data.students.length);
data.randomNumber = randomNumber;
const currentUser = data.students[randomNumber];
const userDom = createStudent(currentUser);
root.append(userDom);


