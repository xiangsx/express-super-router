import chai from 'chai';
import chaiHttp from 'chai-http';
import express, { Request, Response } from 'express';
import SuperRouter from '../src/index.ts';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Logger Middleware', () => {
    let app: express.Application;

    before(() => {
        app = express();
        app.use(SuperRouter);

        app.get('/', (req: Request, res: Response) => {
            res.send('Hello World!');
        });
    });

    it('logs the request', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});
