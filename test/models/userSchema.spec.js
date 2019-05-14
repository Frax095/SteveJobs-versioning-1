const chai = require('chai');
const expect = chai.expect;
const UserSchema = require('../../models/userSchema');

describe('User.create()', () => {
    /* before('Delete all users from DB test', async () => {
      await User.remove({});
    }); */

    /* after('Delete all users from DB test', async () => {
      await UserSchema.deleteMany({});
    }); */

    it('Create new User Document', async () => {
        const newUser = {
            name: 'Fabrizio',
            surname: 'Bianchi',
            email: ['fabrizio.bianchi@gmail.com'],
            born: 22,
            gender: 'male',
        };
        const user = await UserSchema.create(newUser);
        expect(user).has.property('name', newUser.name);
        expect(user).has.property('surname', newUser.surname);
        expect(user).has.property('email', newUser.email);
        expect(user).has.property('born', newUser.born);
        expect(user).has.property('gender', newUser.gender);
        expect(user).has.property('_id');
    });
});
