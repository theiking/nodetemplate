import { Document, Model } from 'mongoose';

export abstract class GenericService {

    private GenericModel: typeof Model;

    constructor(model: typeof Model) {
        this.GenericModel = model;
    }

    getAll = (): Promise<Document[]> =>
        this.GenericModel.find({})
            .then(documents => { return documents; })

    getOne = (id: string): Promise<Document> =>
        this.GenericModel.findOne({ _id: id })
            .then(document => {
                return document;
            })

    add = (document: Document) =>
        document.save({})
            .then(success => { return success; })

    deleteById = (id: string) =>
        this.GenericModel.deleteOne({ _id: id })
            .then(success => { return success; })

    update = (id: string, document: any) =>
        this.GenericModel.findByIdAndUpdate({ _id: id }, document)
            .then(success => { return success; })

}