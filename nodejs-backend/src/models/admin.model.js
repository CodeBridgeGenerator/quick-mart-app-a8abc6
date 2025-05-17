
    module.exports = function (app) {
        const modelName = 'admin';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            adminId: { type:  String , required: true },
supermarketId: { type:  String , required: true },
name: { type:  String , required: true },
phone: { type:  String , maxLength: 150, index: true, trim: true },
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