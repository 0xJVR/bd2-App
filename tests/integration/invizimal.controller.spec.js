'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var request = chai.request;

var app = require('../../app');
var InvizimalModel = require('../../modules/invizimal/invizimal.model');
var InvizimalFixture = require('../fixtures/invizimal/invizimal-fixture');

var baseUri = '/api/invizimal';

describe('InvizimalController', function () {

    describe("POST " + baseUri, function () {
        InvizimalModel.deleteMany({});
        it('should add new invizimals', async function () {
            const requests = InvizimalFixture.invizimals.map(invizimal => {
                return request(app)
                    .post(baseUri)
                    .send(invizimal)
                    .then(res => {
                        expect(res.status).to.equal(201);
                        expect(res.body.name).to.equal(invizimal.name);
                    });
            });
    
            await Promise.all(requests);
        });
    });

    describe("GET " + baseUri, function () {
        it('should get all invizimals', function (done) {
            request(app)
                .get(baseUri)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(InvizimalFixture.invizimals.length);
                    done();
                });
        });
    });

});