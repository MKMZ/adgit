﻿var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;


describe('Test Server', function () {
    it('check the result of main request', function () {
        chai.request('http://localhost:3000')
            .get('/service')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
        });
});


