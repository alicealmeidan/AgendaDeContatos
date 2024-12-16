<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $endereco = $_POST['endereco'];

    $sql = "UPDATE contatos SET nome = :nome, telefone = :telefone, email = :email, endereco = :endereco WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':nome' => $nome, ':telefone'
