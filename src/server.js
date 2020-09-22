import express from 'express';

const users = ['User01', 'User02'];

class Server{
    constructor(){
        this.app = express();
        this.server();
        this.routes();       
    }
     
    routes() {
        this.app.use(express.json());

        // Return all the users.
        this.app.get('/users', (req, res) => {
            return res.json(users)
          })

        this.app.get('/users/:index', (req, res) => {
            const { index } = req.params;

            return res.json(users[index])
          })

        this.app.get('/searchforusers', (req, res) => {
            const { index, name } = req.query;

            const getUser = users[index];

            return res.json(getUser.match(name))
          })

        this.app.post('/users', (req, res) => {
            const { user } = req.body;

            users.push(user)
             
            return res.json(users)
          })

        this.app.put('/users/:index', (req, res) => {
            const { index } = req.params;
            const { user } = req.body;

            users[index] = user;
             
            return res.json(users)
          })
        
        this.app.delete('/users/:index', (req, res) => {
            const { index } = req.params;

            users.splice(index, 1);
             
            return res.json(users)
          }) 
            
    }


    server(){
        this.app.listen(3333);
    }  
    
}


export default new Server();