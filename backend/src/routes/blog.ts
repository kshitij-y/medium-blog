import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
// import bcrypt from 'bcryptjs';
// const saltRounds = 10;
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

    const header = c.req.header("authorization") || "";
    // Bearer token
  
    const token = header.split(" ")[1];
    const user = await verify(token, c.env.JWT_SECRET);
    if(user){

        c.set("userId", user.id as string); // check here
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

    const body = await c.req.json();
    const authorId = c.get("userId");
    console.log(authorId);

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog  = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
      id: blog.id
    })
})
  
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
  
blogRouter.get('/', async (c) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const blog  = await prisma.post.findFirst({
            where: {
                id: body.id
            }
        })

        return c.json({
            blog
        })
    } catch(e) {
        c.status(411);
        return c.json({
            message: "error while fetching post"
        })
    }
});
 // add pagination here
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const blog  = await prisma.post.findMany();

        return c.json({
            blog
        })
    } catch(e) {
        c.status(411);
        return c.json({
            message: "error while fetching post"
        })
    }
})
  
  
