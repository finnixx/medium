import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate())

const app = new Hono()

app.post('/api/v1/signup',(c)=>{
  return c.text('signup note'); 
})

app.post('/api/v1/signin',(c)=>{
  return c.text('signin note'); 
})

app.post('/api/v1/blog',(c)=>{
  return c.text('signup note'); 
})

app.put('/api/v1/blog',(c)=>{
  return c.text('signup note'); 
})

app.get(`/api/v1/blog/:id`,(c)=>{
  const id = c.req.param('id');
  console.log(id);
  return c.text('get blog route');
})


export default app
