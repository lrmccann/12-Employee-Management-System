const company = require('./controllers/employee.js');
const department = require('./controllers/department.js');
const role = require('./controllers/role.js');

exports.route = (app) => {

    app.post('/employee', company.create);
    app.post('/department', department.create);
    app.post('/role', role.create);
    app.get('/employee/', company.readAll);
    app.get('/employee/:id?', company.read);
    app.get('/department/', department.readAll);
    app.get('/department/:id?', department.read);
    app.get('/role/', role.readAll);
    app.get('/role/:id?', role.read);
    app.patch('/employee/:id', company.update);
    app.patch('/department/:id', department.update);
    app.patch('/role/:id', role.update);
    // app.delete('/company/:id', company.delete);

}
