const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {'@primary-color': '#ffbc00'},
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
