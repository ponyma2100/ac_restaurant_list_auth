const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/:type/:sort', (req, res) => {
  const userId = req.user._id

  Restaurant.find({ userId })
    .lean()
    .sort({ [req.params.type]: [req.params.sort] })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

module.exports = router