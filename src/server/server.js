import { createServer, Model, hasMany } from "miragejs";
import jwt from 'jsonwebtoken';

const SECRET_KEY = '08538956efd2b5a3833bf0dacf4ffc30ea8b0af86b0b2e94c8dfeec61f7f2422';


const generateJWT = user => {
  return jwt.sign(
    {userId: user.id, email: user.email},
    SECRET_KEY,
    {expiresIn: '1h'} 
  )
}

const verifyJWT = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }
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

    //Login
    this.post('/register', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const user = schema.users.create(attrs);

      const token = generateJWT(user);
      return {user,token}
    })

    // Register
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


    // Users
    // this.get("/users", (schema) => {
    //   return schema.users.all();
    // });


    // Cards
    this.get("/cards", (schema, request) => {
      const authHeader = request.requestHeaders['Authorization'];
      if(authHeader){
        const token = authHeader.split(' ')[1];
        const userData = verifyJWT(token);
        if(userData) {
          const user = schema.users.find(userData.userId);
          return user.cards;
        } else {
          return new Response(401, {}, { error: "Invalid token" });
        }
      } else {
        return new Response(401, {}, { error: "Authorization header missing" });
      }
    })

    this.post("/cards", (schema, request) => {
      const authHeader = request.requestHeaders['Authorization'];
    
      if (authHeader) {
        const token = authHeader.split(' ')[1];
        const userData = verifyJWT(token);
    
        if (userData) {
          const user = schema.users.find(userData.userId);
          const cardData = JSON.parse(request.requestBody); // Данные поступают с фронтенда
          const newCard = schema.cards.create(cardData); // Создание новой карты
          user.cards.add(newCard); // Добавление карты к пользователю
          return newCard; // Возврат данных новой карты на фронтенд
        } else {
          return new Response(401, {}, { error: "Invalid token" });
        }
      } else {
        return new Response(401, {}, { error: "Authorization header missing" });
      }
    });
  },
});
