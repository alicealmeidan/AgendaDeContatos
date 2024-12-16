<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $endereco = $_POST['endereco'];

    $sql = "INSERT INTO contatos (nome, telefone, email, endereco) VALUES (:nome, :telefone, :email, :endereco)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':nome' => $nome, ':telefone' => $telefone, ':email' => $email, ':endereco' => $endereco]);

    echo "Contato adicionado com sucesso!";
}
?>
