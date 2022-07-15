const router = require('express').Router();
const controllerCharacter = require('./character.controller');
const { validId, validObjectBody } = require('./character.middleware');
const authMiddleware = require('./character.middleware');

router.get(
  '/',
  authMiddleware,
  controllerCharacter.findAllCharactersController,
);
router.get(
  '/find/:id',
  authMiddleware,
  validId,
  controllerCharacter.findByIdCharacterController,
);
router.post(
  '/create',
  authMiddleware,
  validObjectBody,
  controllerCharacter.createCharacterController,
);
router.put(
  '/update/:id',
  authMiddleware,
  validId,
  validObjectBody,
  controllerCharacter.updateCharacterController,
);
router.delete(
  '/delete/:id',
  authMiddleware,
  validId,
  controllerCharacter.deleteCharacterController,
);
router.get('/search', controllerCharacter.searchCharactersByNameController);

module.exports = router;
