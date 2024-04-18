'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var request = chai.request;

var app = require('../../app');
var GormitiModel = require('../../modules/gormiti/gormiti.model');
var GormitiFixture = require('../fixtures/gormiti/gormiti-fixture');

var baseUri = '/api/gormiti';

describe('GormitiController', function () {
    before(async function() {
        await GormitiModel.deleteMany({});
    });

    describe("POST " + baseUri, function () {
        it('should add new gormitis', async function () {
            const requests = GormitiFixture.gormitis.map(gormiti => {
                return request(app)
                    .post(baseUri)
                    .send(gormiti)
                    .then(res => {
                        expect(res.status).to.equal(201);
                        expect(res.body.name).to.equal(gormiti.name);
                    });
            });
    
            await Promise.all(requests);
        });
    });

    describe("GET " + baseUri, function () {
        it('should get all gormitis', function (done) {
            request(app)
                .get(baseUri)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(GormitiFixture.gormitis.length);
                    done();
                });
        });
    });

});