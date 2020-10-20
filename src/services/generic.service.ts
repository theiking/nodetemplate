import { Document, Model } from 'mongoose';

export abstract class GenericService {

    private GenericModel: typeof Model;

    constructor(model: typeof Model) {
        this.GenericModel = model;
    }
    
    getAll = (): Promise<Document[]> => 
        this.GenericModel.find({})
            .then(documents => { return documents; })
            .catch();

    getOne = (id: String): Promise<Document> => 
        this.GenericModel.findOne({ _id: id })
            .then(document => { return document; })
            .catch();

    add = (document: Document) => 
        document.save({})
            .then(success => { return success; })
            .catch();

    deleteById = (id: String) => 
        this.GenericModel.deleteOne({ _id: id })
            .then(success => { return success; })
            .catch();

    update = (id: String, document: any) => 
        this.GenericModel.findByIdAndUpdate({ _id: id }, document)
            .then(success => { return success; })
            .catch();
    
    
}