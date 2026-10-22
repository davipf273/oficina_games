// criado para poder fazer o relacionamento das tabelas
const Cliente = require('./Cliente')
const Console = require('./Console')
const Agendamento = require('./Agendamento')

Cliente.hasMany(Console,{
    foreignKey: 'idCliente',
    as: 'consoleCliente',
    onDelete: 'CASCADE'
})

Console.belongsTo(Cliente,{
    foreignKey:'idCliente',
    as: 'clienteConsole',
    allowNull: false
})

Console.hasMany(Agendamento,{
    foreignKey: 'idConsole',
    as: 'agendamentoConsole',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Console,{
    foreignKey: 'idConsole',
    as: 'consoleAgendamento',
    allowNull: false
})

Cliente.hasMany(Agendamento,{
    foreignKey: 'idCliente',
    as: 'agendamentoCliente',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Cliente,{
    foreignKey:'idCliente',
    as:'clienteAgendamento',
    allowNull:false
})

module.exports = { Cliente, Console, Agendamento}