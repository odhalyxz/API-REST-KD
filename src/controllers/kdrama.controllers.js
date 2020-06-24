const kdramaCtrl = {}
const Kdrama = require('../models/kdrama');
const createError = require('../helpers/errors');

kdramaCtrl.createNewKdrama = async (req,res) => {
    
    let { title, episodes, release, gender, network , write, director } = req.body;
    
    if (!title || !episodes) {
        let error =  createError("request 2");
        console.log("Ocurrio un error",error);
        res.status(500).send(error.message);
        
    }else{
        let obj_kdrama = { title, episodes, release, gender, network , write, director }
        let newKdrama = new Kdrama(obj_kdrama);
        try {
            let created = await newKdrama.save();
            res.send({ result: created })
        } catch (error) {
            res.status(500).send('Algo salió mal al insertar en la DB!');
        }

    }
};

kdramaCtrl.getKdrama = async (req,res) => {
    let kdramaId = req.params.id;
    try {
        let kdrama_obj = await Kdrama.findById(kdramaId);
        if(!kdrama_obj){
            res.status(404).send({message: 'El kdrama no existe'});
        }else{
            res.status(200).send(kdrama_obj);
        }
        
    } catch (error) {
        res.status(500).send('Algo salió mal al realizar la consulta en la DB!');
    }
};

kdramaCtrl.listAllKdramas = async (req,res) => {
    try {
        let kdrama_obj = await Kdrama.find();
        if(!kdrama_obj){
            res.status(404).send({message: 'Aun no hay kdramas'});
        }else{
            res.status(200).send(kdrama_obj);
        }
        
    } catch (error) {
        res.status(500).send('Algo salió mal al realizar la consulta en la DB!');
    }

};

kdramaCtrl.updateKdrama = async (req,res) => {
    let kdramaId = req.params.id;
    let { title, episodes } = req.body;
    
    if (!title || !episodes) {
        let error =  createError("request 2");
        console.log("Ocurrio un error",error);
        res.status(500).send(error.message);
        
    }else{
        let obj_kdrama = {
            title,
            episodes
        };
        try {
            let kdrama_obj = await Kdrama.findByIdAndUpdate(kdramaId, obj_kdrama);
            if(!kdrama_obj){
                res.status(404).send({message: 'El kdrama no se ACTUALIZO'});
            }else{
                res.status(200).send(kdrama_obj);
            }
            
        } catch (error) {
            res.status(500).send('Algo salió mal al realizar la consulta en la DB!');
        }
    }
    

};

kdramaCtrl.deleteKdrama = async (req,res) => {
    let kdramaId = req.params.id;
    
    try {
        let kdrama_obj = await Kdrama.findByIdAndDelete(kdramaId);
        if(!kdrama_obj){
            res.status(404).send({message: 'El kdrama no se ELIMINO'});
        }else{
            res.status(200).send(kdrama_obj);
        }
        
    } catch (error) {
        res.status(500).send('Algo salió mal al realizar la consulta en la DB!');
    }
    

};


module.exports = kdramaCtrl;

