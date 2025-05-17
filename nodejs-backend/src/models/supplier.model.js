
    module.exports = function (app) {
        const modelName = 'supplier';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            supplierId: { type:  String , required: true },
name: { type:  String , required: true },
phone: { type:  String , maxLength: 150, index: true, trim: true },
addressId: { type:  String , required: true },
loginId: { type:  String , required: true },

            
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