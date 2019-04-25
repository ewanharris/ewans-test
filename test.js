const { run } = require('appcd-subprocess');

run('npm', [ 'install', '-g', `appcelerator@4.2.13`, '--json'], { shell: true })
	.then(out => {
		console.log(out);
	})
	.catch(error => {
		console.log(error);
	})
