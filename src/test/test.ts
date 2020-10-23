import server from "../app";
import chai = require('chai');
import chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

describe('Tesk Course API', () => {

    it('Get Courses', (done) => {
        chai.request(server)
            .get("/api/course")
            .end((err: any,res: any) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eq(8);
            done()    
            })
    });

    it('Not Get Courses', (done) => {
        chai.request(server)
            .get("/api/cours")
            .end((err: any,res: any) => {
                res.should.have.status(404);
            done()    
            })
    });

    it('Get course by id', (done)=>{
        chai.request(server)
            .get("/api/cours/5f7a93bf19b91f0d41a25d80")
            .end((err: any,res: any) => {
                res.should.have.status(200);
                res.body.length.should.be.a('object');
            done()    
            })
    })
})

