"use strict";
function promoverUsuario(user) {
    user.isAdmin = true;
    console.log(`Promovendo ${user.nome}...`);
    console.log(user);
}
promoverUsuario({ id: 1, nome: "Carlos", email: "carlos@email.com" }); // Válido
// promoverUsuario({ id: 2, nome: "Joana" }); // Erro! Falta a propriedade 'email'.
