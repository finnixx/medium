import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@finnix/common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
  Variables : {
		userId: string
	}
}>();

blogRouter.post('/', async (c) => {
	console.log("here");
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
	console.log("creating post")
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId

		}
	});
	console.log(post)
	return c.json({
		id: post.id
	});
})


blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    
	const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    console.log(body)
	try {await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});}
    catch (e){console.log(e)}

	return c.text('updated post');
});

blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id:id
		},
		select:{
			id:true,
			title:true,
			content:true,
			author:{
				select:{
					name:true
				}
			}
		}
	});

	return c.json(post);
})

blogRouter.get('/api/v1/blog/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	try	{const posts = await prisma.post.findMany({
		include: {
			author: true,
		}
		});
		return c.json(posts);
	}
	catch(e){
		return c.json (e);
	}
})
