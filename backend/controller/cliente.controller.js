// criado para poder saparar e organizar os controllers
const Cliente = require('../models/Cliente') // colocar o crud inteiro


const cadastrarCliente = async (req, res) => {
    const valores = req.body
    try {
        await Cliente.create({
            nome: valores.nome,
            email: valores.email,
            senha: valores.senha, 
            cpf: valores.cpf,     
            telefone: valores.telefone
        })
        return res.status(201).json({ message: 'Cliente cadastrado com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar cliente!' })
    }
}

const listarClientes = async (req, res) => {
    
    
    return res.status(500).json({ message: 'Função de listar não implementada!' })
}