<?php
include 'config.php';

$sql = "SELECT * FROM contatos";
$stmt = $pdo->query($sql);
$contatos = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($contatos as $contato) {
    echo "Nome: " . htmlspecialchars($contato['nome']) . "<br>";
    echo "Telefone: " . htmlspecialchars($contato['telefone']) . "<br>";
    echo "Email: " . htmlspecialchars($contato['email']) . "<br>";
    echo "Endereço: " . htmlspecialchars($contato['endereco']) . "<br><hr>";
}
?>
