import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Arnaud',
    email: 'arnaud.chapeleur@gmail.com',
    password: bcrypt.hashSync('123456'),
  },
];

export default users;
