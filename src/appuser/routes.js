const {Router} = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getAppUsers)
router.get('/:id', controller.getAppUserByGoogleId)
router.post('/', controller.addAppUser)
router.delete('/:id', controller.removeAppUserByGoogleId)
router.put('/:id', controller.updateAppUser)

module.exports = router