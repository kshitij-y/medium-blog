import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs';
const saltRounds = 10;
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
}>()



userRouter.post('/signup', async (c) => {
    console.log("Request received");
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    console.log("Request body:", body);
  
    try {
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);
  
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: hashedPassword,
        },
      });
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  
      return c.json({ jwt });
    } catch (e) {
      console.error("Error:", e);
      c.status(403);
      return c.json({ error: "Error while signing up" });
    }

    //return c.text("hello");
});
  
  
  
  
userRouter.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
  
    try {
      const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
      });
  
      if(!user) {
        c.status(403);
        return c.json({
          msg: "Not found"
        })
      }
  
      const isUser = await bcrypt.compare(body.password, user.password);
      if(!isUser){
        return c.json({
          error: "Password is wrong"
        })
      }
  
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
      return c.json({
        jwt
      })
    } catch (error) {
      console.error(error);
      c.status(500);
      return c.json({ msg: "Internal Server Error" });
    }
});
  