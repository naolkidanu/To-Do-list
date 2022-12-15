// <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css"
			integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY="
			crossorigin="anonymous"
		/>
		<title>ToDo List</title>
	<script defer src="/runtime.bundle.js"></script><script defer src="/index.bundle.js"></script></head>
	<body>
		<div class="container">
			<div class="today-list">
				<h2 class="title">Today's To Do</h2>
				<button type="button" class="btn btn-refresh">
					<i class="fa fa-refresh" aria-hidden="true"></i>
				</button>
			</div>
			<div class="input-list">
				<input class="input" type="text" placeholder="Add to your list..." />
				<button type="button" class="btn btn-add">
					<i class="fa fa-plus-square" aria-hidden="true"></i>
				</button>
			</div>
			<ul class="list"></ul>
			<button type="button" class="btn btn-clear">Clear all completed</button>
		</div>
	</body>
</html>