const mysql = require('../config/connection.js');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM role`);
    console.log(data);
    return data;
}

exports.selectByID = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM role WHERE id = ?`, [id]);
    return data[0];
}

exports.insert = async(department_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO role SET ?;`, [department_obj]);
    console.log(data);
    return data;
}

exports.update = async(id, department_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE role SET ? WHERE id = ?`, [department_obj, id]);
    console.log(data);
    return data;
}