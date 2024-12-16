<?php
// Configuração do banco de dados
$host = 'localhost';       // Host onde o banco está rodando
$dbname = 'AgendaDeContatos'; // Nome do banco de dados
$username = 'root';        // Usuário do banco de dados
$password = 'masterkey';            // Senha do banco de dados

try {
    // Cria uma conexão com o banco usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}
?>