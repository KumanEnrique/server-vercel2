const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send([{
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }])
})
router.post('/create',(req,res)=>{
    console.log(req.body)
    res.send('dato recibido')
})

module.exports = router