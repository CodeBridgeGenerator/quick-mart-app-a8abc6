
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerId: faker.lorem.sentence(""),
name: faker.lorem.sentence(""),
phone: faker.lorem.sentence(1),
addressId: faker.lorem.sentence(""),
loginId: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
