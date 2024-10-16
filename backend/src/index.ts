import { Hono } from 'hono';
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
  origin: 'http://localhost:5173',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.options('*', (c) => {
  c.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  c.header('Access-Control-Allow-Credentials', 'true');
  return c.text('', 204);
});

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;
