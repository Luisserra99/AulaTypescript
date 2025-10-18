interface Usuario {
  id: number;
  nome: string;
  email: string;
  isAdmin?: boolean; // A interrogação '?' torna a propriedade opcional
}

function promoverUsuario(user: Usuario) {
  user.isAdmin = true;
  console.log(`Promovendo aa${user.nome}...`);
  console.log(user);
}

promoverUsuario({ id: 1, nome: "Carlos", email: "carlos@email.com" }); // Válido
//promoverUsuario({ id: 2, nome: "Joana" }); // Erro! Falta a propriedade 'email'.