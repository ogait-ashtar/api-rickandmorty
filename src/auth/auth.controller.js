require('dotenv').config();
const authService = require('./auth.service');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email); //procurar usuario pelo email

  if (!user) {
    return res.status(400).send({ message: 'Usuário não encontrado!' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password); //autentica c passwordesta correto

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Senha inválida!' });
  }

  const token = authService.generateToken(user.id); // vai retornar o id do usuario gerando o token

  res.send({ token });
};

module.exports = loginController;
