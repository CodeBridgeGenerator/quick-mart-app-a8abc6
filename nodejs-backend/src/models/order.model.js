
    module.exports = function (app) {
        const modelName = 'order';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            customerId: { type:  String , required: true },
supermarketId: { type:  String , required: true },
totalPrice: { type: Number, required: false, max: 10000000 },
status: { type:  String , required: true },
paymentMethod: { type:  String , required: true },
deliveryMethod: { type:  String , required: true },
orderId: { type:  String , required: true },

            
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