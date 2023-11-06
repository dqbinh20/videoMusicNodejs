class LearningController {
    //GET learning page 
    index(req, res) {
        res.send('learning helloo page in controllers');

    }
}

module.exports = new LearningController();