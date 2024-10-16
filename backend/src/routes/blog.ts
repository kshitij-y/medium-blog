import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import {getCookie, getSignedCookie, setCookie, setSignedCookie, deleteCookie } from 'hono/cookie'


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>()


blogRouter.use("/*", async (c, next) => {

    const token = getCookie(c, "token") || "didn't found the token";
    console.log(token);
    const user = await verify(token, c.env.JWT_SECRET);
    if(user){
        c.set("userId", user.id as string);
        await next()
    } 
    else{
        c.status(403)
        return c.json({
            error: "unauthorized"
        })
    }
  
});

blogRouter.post('/', async (c) => {
    try {
        const body = await c.req.json();
        const authorId = c.get("userId");
        console.log(authorId);

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        });
        
        return c.json({
            id: blog.id,
            message: 'Blog created successfully'
        });
    } catch (error) {
        console.error('Blog creation failed:', error);
        return c.json({
            message: 'Blog creation failed'
        }, 500);
    }
});

  
blogRouter.put('/', async (c) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog  = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
      id: blog.id
    })
})
  
blogRouter.get('/single/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})

 // add pagination here
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const blog  = await prisma.post.findMany();

        return c.json({
            blog: blog
        })
    } catch(e) {
        c.status(411);
        return c.json({
            message: "error while fetching post"
        })
    }
})
  
  
