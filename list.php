<?php
include 'config.php';

$sql = "SELECT * FROM Contatos";
$stmt = $pdo->query($sql);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo $row['nome'] . ' - ' . $row['telefone'] . '<br>';
}
?>
