import { Hono } from 'hono';

import * as dotenv from "dotenv";
dotenv.config();
import { verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


export default {
  async fetch(request, env, ctx) {
    return new Response("Hello, world!");
  },
};


 
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string,
	},
  Variables : {
		userId: string
	}
}>();

app.use('/api/v1/blog/*', async (c, next) => {
	const jwt = c.req.header('Authorization');
  console.log(jwt);
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id as string);
	await next()
})

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)