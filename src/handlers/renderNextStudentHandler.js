import data from '../data.js';
import updateStudent from '../components/updateStudent.js';

const renderNextStudent = () => {
    data.randomNumber++;
    if (data.randomNumber > data.students.length - 1) {
        data.randomNumber = 0;
    }

    const nextUser = data.students[data.randomNumber];
    updateStudent(nextUser);
};

export default renderNextStudent;
