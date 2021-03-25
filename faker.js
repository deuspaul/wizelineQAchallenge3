const faker = require('faker');

function createTask(userContext, events, done) {
    userContext.vars.content = faker.name.findName();
    userContext.vars.due = faker.date.future();
    done();
}

module.exports = { createTask }