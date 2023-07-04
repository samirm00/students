const createStudent = (currentUser) => {
    // create a card
    const card = document.createElement('div');
    card.classList.add('card');
    // create avatar
    const avatar = document.createElement('img');
    avatar.src = currentUser.avatar;
    avatar.alt = currentUser.name;
    avatar.classList.add('avatar');

    // create a container
    const container = document.createElement('div');
    container.classList.add('container');

    // create name
    const studentName = document.createElement('h4');
    studentName.innerText = currentUser.name;
    studentName.classList.add('name');
    // create occupation
    const occupation = document.createElement('p');
    occupation.innerText = currentUser.occupation;
    occupation.classList.add('occupation');

    // append elements
    container.append(studentName, occupation);
    card.append(avatar, container);

    return card;
};

export default createStudent;
