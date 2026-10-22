// criado para poder saparar e organizar os controllers
const Agendamento = require('../models/Agendamento') // arrumar o cadastrar e colocar o listar em ordem de data e atualização


const cadastrarAgendamento = async (req, res) => {
    const valores = req.body
    try {
        const novoAgendamento = await Agendamento.create(valores)
        return res.status(201).json({ message: 'Agendamento cadastrado!', agendamento: novoAgendamento })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar agendamento!' })
    }
}