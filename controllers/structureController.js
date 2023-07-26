import Structures from '../model/structure.js';

export const getStructures = async (req , res) =>{
    try{
        const structure = await Structures.find()
        res.json(structure)
    }catch (error){
        res.status(500).json({massage: error.message});
    }
};

export const saveStructures = async (req , res) =>{
    const structure = new Structures(req.body);
    try{
        const insertedStructure = await structure.save();
        res.status(201).json(insertedStructure);
    }catch (error){
        res.status(400).json({message : error.message});
    }
};
export const getStructuresById = async (req , res) =>{
    try{
        const structure = await Structures.findById(req.params.id);
        res.json(structure);
    }catch (error){
        res.status(404).json({message : error.message});
    }
};
export const updateStrucktures = async (req , res) =>{
    try{
        const updatedStructure = await Structures.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedStructure);
    }catch (error){
        res.status(400).json({message : error.message});
    }
};