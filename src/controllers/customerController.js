const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM cliente', (err, customers)=> {
            if (err) {
                res.json(err);
            }
               res.render('customers',{
                data: customers,
                
            });
           
        });
    });
};

controller.save = (req,res)=>{
   const data = req.body;
   req.getConnection((err, conn)=>{
       conn.query('INSERT INTO cliente set ?',[data], (err,customer)=>{
           res.redirect('/');
       });
   });
};

controller.edit = (req,res)=>{
    const {dni} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM cliente WHERE dni= ?',[dni], (err, customer)=>{
            console.log(customer);
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req,res)=>{
    const {dni} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE cliente set ? WHERE dni = ?', [newCustomer, dni],(err, rows)=>{
            res.redirect('/')
        });
    });
};

controller.delete = (req,res)=>{
    const {dni} = req.params;
    req.getConnection((err,conn)=>{
        console.log(dni);
        conn.query('DELETE FROM cliente WHERE dni = ?',[dni],(err, rows)=>{
            res.redirect('/');
        });
    });
 };


module.exports=controller;