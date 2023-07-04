const updateStudent = (user) => {
    const avatar = document.querySelector('.avatar');
    avatar.src = user.avatar;
    avatar.alt = user.name;

    const name = document.querySelector('.name');
    name.innerText = user.name;

    const occupation = document.querySelector('.occupation');
    occupation.innerText = user.occupation;
};

export default updateStudent;
