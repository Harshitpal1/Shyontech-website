<?php
session_start();

// Security Check: If not logged in, redirect to login
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex">
    <div class="w-64 bg-slate-900 min-h-screen text-white p-6">
        <h1 class="text-xl font-bold mb-8">Control Panel</h1>
        <nav class="space-y-4">
            <a href="#" class="block text-blue-400 font-semibold">Dashboard</a>
            <a href="#" class="block hover:text-blue-300">User Management</a>
	    <a href="#" class="block hover:text-blue-300">Employee Management</a>
            <a href="#" class="block hover:text-blue-300">System Logs</a>
            <a href="logout.php" class="block text-red-400 mt-10">Logout</a>
        </nav>
    </div>

    <main class="flex-1">
        <header class="bg-white shadow-sm p-4 flex justify-between items-center px-10">
            <h2 class="text-xl font-semibold">Welcome, <?php echo htmlspecialchars($_SESSION['user']); ?></h2>
            <div class="text-sm text-gray-500">Last Login: <?php echo date('Y-m-d H:i'); ?></div>
        </header>

        <div class="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border">
                <p class="text-gray-500 text-sm">Server Status</p>
                <h3 class="text-2xl font-bold text-green-500">Online</h3>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border">
                <p class="text-gray-500 text-sm">Database Load</p>
                <h3 class="text-2xl font-bold text-orange-500">14%</h3>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border">
                <p class="text-gray-500 text-sm">New Tickets</p>
                <h3 class="text-2xl font-bold text-blue-500">8</h3>
            </div>
        </div>
    </main>
</body>
</html>