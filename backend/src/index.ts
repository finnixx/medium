import { Hono } from 'hono'

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
