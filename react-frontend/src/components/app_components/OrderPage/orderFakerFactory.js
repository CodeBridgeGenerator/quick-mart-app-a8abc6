
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerId: faker.lorem.sentence(""),
supermarketId: faker.lorem.sentence(""),
totalPrice: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),
paymentMethod: faker.lorem.sentence(""),
deliveryMethod: faker.lorem.sentence(""),
orderId: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
