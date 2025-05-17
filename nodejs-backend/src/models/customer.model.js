
    module.exports = function (app) {
        const modelName = 'customer';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            customerId: { type:  String , required: true, unique: true, maxLength: null },
name: { type:  String , required: true, maxLength: null },
phone: { type:  String , maxLength: 150, index: true, trim: true },
addressId: { type:  String , required: true, unique: true, minLength: null, maxLength: null },
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