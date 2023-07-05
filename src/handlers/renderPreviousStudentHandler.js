import data from '../data.js';
import updateStudent from '../components/updateStudent.js';

const renderPreviousStudent = () => {
    data.randomNumber--;
    if (data.randomNumber < 0) {
        data.randomNumber = data.students.length - 1;
    }

    const previousUser = data.students[data.randomNumber];
    updateStudent(previousUser);
};

export default renderPreviousStudent;
