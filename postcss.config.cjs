const autoprefixer = require('autoprefixer');
const customMedia = require('postcss-custom-media');
const nesting = require('postcss-nesting');

module.exports = {
	plugins: [nesting(), customMedia(), autoprefixer()]
};
