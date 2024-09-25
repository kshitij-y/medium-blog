import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign } from 'hono/jwt'
import bcrypt from 'bcryptjs';
const saltRounds = 10;

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

app.post('/api/v1/signup', async (c) => {
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
});




app.post('/api/v1/signin', async (c) => {

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


app.post('/api/v1/blog', (c) => {
  return c.json({
    msg: "hello"
  })
})

app.put('/api/v1/blog', (c) => {
  return c.text('hello')
})

app.get('/api/v1/blog:id', (c) => {
  return c.text('hello')
})


export default app

