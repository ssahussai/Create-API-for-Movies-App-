var Movie = require('../../models/movie');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

function index(req, res) {
Movie.find({}, function(err, movies) {
    res.status(200).json(movies);
});
}

function create(req, res) {
Movie.create(req.body, function(err, movie) {
    if(err) {
        return res.status(400).json(err);
    } else {
        return res.status(201).json(movie);
    }
});
}

function show(req, res) {
Movie.findById(req.params.id, function(err, movie) {
    res.status(200).json(movie);
});
}

function update(req, res) {
Movie.findByIdAndUpdate(
    req.params.id, 
    req.body,
    {new: true}
).then(function(movie) {
    res.status(200).json(movie);
});
}

function deleteOne(req, res) {
Movie.findByIdAndDelete(req.params.id, function(err, movie) {
    res.status(200).json(movie);
});
}