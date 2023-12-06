import express from 'express'
import cors from 'cors'
import mysql, { createConnection} from 'mysql'
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'inventory',
})
app.post('/Signup',(req,res)=>{
    const sql = "INSERT INTO signup(`username`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password

    ]
    db.query(sql,[values],(err,result) =>{
        if(err) return res.json({Message:"Error in node"});
        return res.json(result);

    })
})
app.post('/Login',(req,res)=>{
    const sql = "SELECT username,password FROM signup WHERE username = ? and password = ?";
    db.query(sql,[req.body.username, req.body.password],(err,result) => {
        

        if(err) return res.json({Message: "Error inside server"});
        if(result.length > 0){
            return res.json({Login: true})
        }
        else {
            return res.json({Login: false})
        }
    })
})
app.get("/Home",(req,res) => {
    const sql = "SELECT * FROM datatable";
    db.query(sql,(err,data) =>{ 
        if(err) return res.json("Error");
        return res.json(data);
        
    })

})
app.post('/Home',(req,res) =>{
    const sql = "INSERT INTO datatable (`brand`,`category`,`item`,`count`,`date`,`deliverypin`,`ecommerce`) VALUES (?)";
    const values = [
        req.body.brand,
        req.body.category,
        req.body.item,
        req.body.count,
        req.body.date,
        req.body.deliverypin,
        req.body.ecommerce
    ]
    db.query(sql, [values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.put('/Update/:id',(req,res) =>{
    const sql = "UPDATE datatable SET `brand` = ?, `category` = ?, `item` = ?, `count` = ?, `date` = ?, `deliverypin` = ?, `ecommerce` = ? WHERE ID = ?";
    const values = [
        req.body.brand,
        req.body.category,
        req.body.item,
        req.body.count,
        req.body.date,
        req.body.deliverypin,
        req.body.ecommerce
    ]
    const id = req.params.id;
    db.query(sql, [...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.delete('/Home/:id',(req,res) =>{
    const sql = "DELETE FROM datatable WHERE ID = ?";
    const id = req.params.id;
    
    db.query(sql, [id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8081,()=>{
    console.log("connected to server"); 
}) 