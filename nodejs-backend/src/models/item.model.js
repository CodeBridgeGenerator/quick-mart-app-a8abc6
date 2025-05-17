
    module.exports = function (app) {
        const modelName = 'item';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , required: true },
description: { type:  String , required: true },
price: { type: Number, required: false, max: 10000000 },
stockQty: { type: Number, required: false, max: 10000000 },
category: { type:  String , required: true },
supplierId: { type:  String , required: true },
supermarketId: { type:  String , required: true },
itemId: { type:  String , required: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };