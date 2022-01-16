import { Container } from "./styles";


export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel Apto</td>
            <td className="withdraw">- R$11.000,00</td>
            <td>Custo Fixo</td>
            <td>17/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}