const router = require('express').Router()

router.get('/', (req,res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/brick-wall-1834784_960_720.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-1711012_960_720.jpeg'
  }]
  
      
    res.render('places/index', { places})
})

module.exports = router