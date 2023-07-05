document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    //crear usuario y password
    if (username === "Judsolutions" && password === "Jg1234") {
      alert("Inicio de sesión exitoso");
      // Ingreso exitoso
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
  // interfas Atm
  let balance = 0;

function updateBalance() {
  document.getElementById("balance").textContent = "Saldo: $" + balance;
}

document.getElementById("deposit-btn").addEventListener("click", function() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

  balance += amount;
  updateBalance();
  document.getElementById("amount").value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

  if (amount > balance) {
    alert("Fondos insuficientes.");
    return;
  }

  balance -= amount;
  updateBalance();
  document.getElementById("amount").value = "";
});
