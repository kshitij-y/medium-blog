import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs';
import { signupInput, signinInput } from "@kshitij_npm/medium";
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
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "incorrect inputs",
        loggedIn: false
      })
    }
    console.log("Request body:", body);
  
    try {
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);

      const found = await prisma.user.findUnique({
        where: {
            email: body.email
        }
      });
      
      if(found){
        c.status(409);
        return c.json({
          message: "User already exists",
          loggedIn: false
        })
      }
      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: hashedPassword,
        },
      });
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      
      return c.json({
        name: user.name,
        loggedIn: true,
        jwt,
        message: "Signed Up"
      });
    } catch (e) {
      console.error("Error:", e);
      c.status(403);
      return c.json({ message: "Error while signing up", loggedIn: false });
    }
});
  
  
  
  
userRouter.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    console.log(body)
    const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "incorrect inputs;",
        loggedIn: false
      })
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
      });
  
      if(!user) {
        c.status(403);
        return c.json({
          message: "Not found",
          loggedIn: false
        })
      }
      // don't need to hash the body.password , it does by itself
      const isUser = await bcrypt.compare(body.password, user.password);
      if(!isUser){
        return c.json({
          message: "Password is wrong",
          loggedIn: false
        })
      }
      
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
      return c.json({
        name: user.name,
        loggedIn: true,
        jwt: jwt,
        message: "Login Successfull",
      });
    } catch (error) {
      console.error(error);
      c.status(500);
      return c.json({ message: "Internal Server Error", loggedIn: false });
    }
});
