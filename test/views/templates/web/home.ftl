<html>
	<head>
		<title>${model.title}</title>
	</head>
	<body>
		<@renderComponent component=model.header.item />

		<div id="main-content">
			<p>Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
		</div>

		<@renderComponent component=model.footer.item />
	</body>
</html>