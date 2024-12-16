<?php
// Inclui a configuração para conectar ao banco de dados
include 'config.php';

// Consulta para selecionar todos os contatos
$sql = "SELECT * FROM contatos";
$stmt = $pdo->query($sql);

// Exibe os contatos em uma tabela HTML
echo "<h1>Lista de Contatos</h1>";
echo "<table border='1'>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereço</th>
        </tr>";

// Itera sobre os registros e os exibe
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['nome']}</td>
            <td>{$row['telefone']}</td>
            <td>{$row['email']}</td>
            <td>{$row['endereco']}</td>
          </tr>";
}

echo "</table>";
?>
