import { User } from '@api/users/models/user.model';

export default function startup() {
  createDefaultUsers();
}

//
// createDefaultUsers
//
async function createDefaultUsers() {
  for (let user of getDefaultUsers()) {
    await createUser(user);
  }
};

//
// createUser
//
async function createUser(user) {
  let found = await User.findOne({ email: user.email });

  if (!found) {
    let userCreated = await User.create(user);
    console.log('user created : ', userCreated);
  }
};

function getDefaultUsers() {
  return [
    { username: 'admin', email: 'admin@email.fr', password: 'monmotdepasse', roles: ['admin'] },
    { username: 'user1', email: 'user1@email.fr', password: 'monmotdepasse' }
  ];
};