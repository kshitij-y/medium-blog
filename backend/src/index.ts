import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();
app.use('*', cors({
  origin: '*', // Allows requests from any origin
  allowMethods: ['GET', 'POST', 'OPTIONS'], // Specify allowed methods
  allowHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app