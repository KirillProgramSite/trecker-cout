import { createServer, Model, hasMany } from "miragejs";
import jwt from 'jsonwebtoken';

const generateJWT = user => {
  return jwt.sign(
    {userId: user.id, email: user.email},
    'your-secret-key',
    {expiresIn: '1h'} 
  )
}

createServer({
  models: {
    user: Model.extend({
      cards: hasMany(),
      goals: hasMany(),
      income: hasMany(),
      expenses: hasMany(),
    }),
    card: Model,
    goal: Model,
    expenses: Model
  },

  routes() {
    this.namespace = "api";

    this.post('/register', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const user = schema.users.create(attrs);

      const token = generateJWT(user);
      return {user,token}
    })

    this.post('/login', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ email: attrs.email });

      if (user && user.password === attrs.password) {
        const token = generateJWT(user);
        return {token, user}
      } else {
        return new Response(401, {}, { error: "Invalid credentials" });
      }
    })

    this.get("/users", (schema) => {
      return schema.users.all();
    });
  },
});
