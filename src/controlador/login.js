const envioDeEmail = require('../email')
const compiladorHtml = require('../utils/compilador')

const usuario = {
    nome: 'Edfram Guerra',
    email: 'edfram.guerra@gmail.com',
    senha: '12345'
}

const login = async (req, res) => {
    const { email, senha } = req.body


    if (email !== usuario.email) {
        return res.status(401).json('Usuário ou senha inválidos')
    }

    if (senha !== usuario.senha) {
        return res.status(401).json('Usuário ou senha inválidos')
    }

    //enviar email
    const html = await compiladorHtml('./src/templates/texto.html', {
        nomeUsuario: 'Edfram Guerra',
        dev: 'EGuerra systems development'
           })

    envioDeEmail.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${usuario.nome} <${usuario.email}>`,
        subject: 'Login',
        html: html
    })

    return res.json('Usuário logado com sucesso')
}

module.exports = {
    login
}