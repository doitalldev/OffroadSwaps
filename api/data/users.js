import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jon@doe.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "mr User",
    email: "mr@user.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
