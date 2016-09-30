"use strict"

// import npm modules
var compression  = require('compression'),
	express      = require('express'),
	app          = express(),
	albums       = require('./data/albums.json'),
	tags         = require('./data/genres.json')

// Set port
app.set('port', (process.env.PORT || process.env.port || 3000))

// Static conent
app.use(express.static('public'))

// Templating
app.set('view engine', 'ejs')
app.set('views', __dirname)

// Compression
app.use(compression())

function findTag(album) { 
	return album.tags.includes(this)
}

Array.prototype.sample = function(size) {
	var shuffled = this.slice(0), i = this.length, temp, index
	while (i--) {
		index = Math.floor((i + 1) * Math.random())
		temp = shuffled[index]
		shuffled[index] = shuffled[i]
		shuffled[i] = temp
	}
	return shuffled.slice(0, size)
}

// Routes
app.get('/music/:tag/:page?', function(req, res) {
	var index = typeof req.params.page === 'undefined' ? 1 : parseInt(req.params.page)

	if (!tags.hasOwnProperty(req.params.tag)) {
		return res.sendStatus(404) // Unknown tag
	}

	var opts = {
		albums: albums.data.filter(findTag, req.params.tag),
		index: index,
		tag: tags[req.params.tag]
	}

	if ((index - 1) * 24 > opts.albums.length) {
		return res.sendStatus(404) // Overflow
	}

	res.render('views/genre', opts)
})


app.get('/', function(req, res) {
	var opts = {
		albums: albums.data,
		genres: tags,
		findTag: function(album) {
			return album.tags.includes(this)
		}
	}
	res.render('views/index', opts)
})


app.get('*', function(req, res){
	res.status(404)
	res.render('views/404')
})

// Listen up
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'))
})

// Fin~