fetch("https://dummyapi.online/api/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // 2. Create a variable to store HTML table headers
    let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Email</th><th></th></tr>`;

    if (json.length <= 0) {
      li += `<tr><td colspan="5" class="text-center">No records found.</td></tr>`;
      return (document.getElementById("tbody").innerHTML = li);
    }

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
            <button style="color: white" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getUser(${user.id})">Edit</button>
        </td>
      </tr>`;
    });

    // 4. DOM Display result
    // document.getElementById("table").innerHTML = li;
    document.getElementById("tbody").innerHTML = li;
  });

function getUser(id) {
  fetch(`https://dummyapi.online/api/users/${id}`)
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("modalBody").innerHTML = `
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">
                            Name
                        </label>
                        <input type="email" class="form-control" id="nameInput" value="${json.name}" />
                    </div>
                    <div class="mb-3">
                        <label for="usernameInput" class="form-label">
                            Username
                        </label>
                        <input type="email" class="form-control" id="usernameInput" value="${json.username}" />
                    </div>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="../assets/user.png" alt="${json.name}" width="150" height="150" />
                </div>
            </div>
            
            <div class="mb-3">
                <label for="emailInput" class="form-label">
                    Email address
                </label>
                <input type="email" class="form-control" id="emailInput" value="${json.email}" />
            </div>
            <div class="mb-3">
                <label for="cityInput" class="form-label">
                    City
                </label>
                <input type="email" class="form-control" id="cityInput" value="${json.address.city}" />
            </div>
            <div class="mb-3">
                <label for="stateInput" class="form-label">
                    State
                </label>
                <input type="email" class="form-control" id="stateInput" value="${json.address.state}" />
            </div>
            <div class="mb-3">
                <label for="streetInput" class="form-label">
                    Street
                </label>
                <input type="email" class="form-control" id="streetInput" value="${json.address.street}" />
            </div>
            <div class="mb-3">
                <label for="zipcodeInput" class="form-label">
                    Zipcode
                </label>
                <input type="email" class="form-control" id="zipcodeInput" value="${json.address.zipcode}" />
            </div>
        `;
    });
}

function logout() {
  window.location.href = "../index.html";
}
