'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var request = chai.request;

var app = require('../../app');
var PokemonModel = require('../../modules/pokemon/pokemon.model');
var PokemonFixture = require('../fixtures/pokemon/pokemon-fixture');

var baseUri = '/api/pokemon';

describe('PokemonController', function () {

    describe("POST " + baseUri, function () {
        PokemonModel.deleteMany({});
        it('should add new pokemons', async function () {
            const requests = PokemonFixture.pokemons.map(pokemon => {
                return request(app)
                    .post(baseUri)
                    .send(pokemon)
                    .then(res => {
                        expect(res.status).to.equal(201);
                        expect(res.body.name).to.equal(pokemon.name);
                    });
            });
    
            await Promise.all(requests);
        });
    });

    describe("GET " + baseUri, function () {
        it('should get all pokemons', function (done) {
            request(app)
                .get(baseUri)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(PokemonFixture.pokemons.length);
                    done();
                });
        });
    });

});