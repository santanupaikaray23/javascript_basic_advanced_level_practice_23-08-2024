let dbObj = {}

dbObj.user = [
    {
        name : 'Santanu',
        city : 'Puri'
    },
    {
        name : 'Sidhanta',
        city : 'Bhubaneswar'
    }
]

dbObj.dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name, city values (${data.name}, ${data})`}
}

//es5
module.exports = dbObj;
