import Sequelize from 'sequelize';
import { Pool } from 'pg';

// export const pool = new Pool('postgres://jfmnqcxc:zUzza_Ah6gRLKkOaNvuQONXusZZ_6TM9@stampy.db.elephantsql.com:5432/jfmnqcxc')


// pool.connect((err,client,release) => {
//     if(err){
//         return console.log('postgres err occured')
//     }
//     console.log('connected');
// })


// const poolObj = {
//     query: (text, params) => pool.query(text, params)
//   }

//   export default poolObj


  
export const sequelize = new Sequelize('postgres://jfmnqcxc:zUzza_Ah6gRLKkOaNvuQONXusZZ_6TM9@stampy.db.elephantsql.com:5432/jfmnqcxc',{
    dialect:"postgres"
});

sequelize
.authenticate()
.then(() => console.log('database connected'))
.catch(err => console.log('unable to connect to the database'))