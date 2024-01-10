
const registeredUsers = [];

function register() {
    const registerUsername = document.getElementById('registerUsername').value;
    const registerPassword = document.getElementById('registerPassword').value;

    if (registerUsername.trim() !== '' && registerPassword.trim() !== '') {
       
        if (!isUserRegistered(registerUsername)) {
         
            registeredUsers.push({ username: registerUsername, password: registerPassword });

            
            showLoginPage();
        } else {
            alert('Username already registered. Please choose a different username.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function isUserRegistered(username) {
    return registeredUsers.some(user => user.username === username);
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = registeredUsers.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        
       window.location.href = 'mainpage.html';
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('loginPage').style.display = 'none';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function showLoginPage() {
   
    document.getElementById('registerForm').reset();

    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}
