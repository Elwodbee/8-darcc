const userList = document.querySelector(".list");

function renderUsers(users) {
    userList.innerHTML = ''; // Clear the list before rendering

    if (users.length === 0) {
        const notFound = document.createElement("li");
        notFound.textContent = "Not Found";
        userList.appendChild(notFound);
        return;
    }

    users.forEach(item => {
        const wrapper = document.createElement("li");

        const usersName = document.createElement("p");
        const userEmail = document.createElement("h2");
        const userAdress = document.createElement("h3");
        const userAge = document.createElement("h4");
        const userPhone = document.createElement("h5");

        usersName.textContent = `Name: ${item.firstName}`;
        userEmail.textContent = `Email: ${item.email}`;
        userAdress.textContent = `Address: ${item.address.city}`;
        userAge.textContent = `Age: ${item.age}`;
        userPhone.textContent = `Phone Number: ${item.phone}`;

        wrapper.append(usersName, userEmail, userAdress, userAge, userPhone);
        userList.appendChild(wrapper);

        wrapper.className = "sanjar";
        userEmail.className = "Sanjar2";
    });
}

function searchUsers() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(data => {
            const filteredUsers = data.users.filter(user =>
                user.firstName.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.address.city.toLowerCase().includes(query)
            );
            renderUsers(filteredUsers);
        });
}

// Initial render
fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => renderUsers(data.users));
