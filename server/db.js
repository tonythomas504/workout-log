const Sequelize = require('sequelize');
const db = new Sequelize('workout-log', 'postgres', 'Tony1221!', {
    host: 'localhost',
    dialect: 'postgres'
});

db.authenticate().then(
    function(){
        console.log('Connected to a workout-log postgres database')
    },
    function(err){
        console.log(err)
    }
);
 
module.exports = db