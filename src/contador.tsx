import React, { useState } from 'react';

// O componente funcional Contador
const Contador = () => {
  // Usando o hook useState com tipagem explícita
  // Dizemos ao TypeScript que o estado 'quantidade' SEMPRE será um número.
  const [quantidade, setQuantidade] = useState<number>(0);

  // A função de clique também é tipada
  // Ela não recebe parâmetros e não retorna nada (void)
  const handleIncrementar = (): void => {
    // Se tentássemos fazer setQuantidade("texto"), o TypeScript daria um erro.
    setQuantidade(quantidadeAnterior => quantidadeAnterior + 1);
  };

  // Função para decrementar a quantidade
  const handleDecrementar = (): void => {
    // A verificação extra garante que não fiquemos com números negativos
    if (quantidade > 0) {
      setQuantidade(quantidadeAnterior => quantidadeAnterior - 1);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Contador de Itens</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{quantidade}</p>
      
      {/* O evento onClick chama nossa função tipada */}
      <button onClick={handleIncrementar}>
        Incrementar
      </button>

      {/* Botão de decrementar, desabilitado se a quantidade for 0 */}
      <button 
        onClick={handleDecrementar} 
        disabled={quantidade <= 0}
        style={{ marginLeft: '10px' }}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;