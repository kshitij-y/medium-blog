import { Hono } from "hono"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
    }
}>()

blogRouter.post('/', (c) => {
  
    return c.json({
      msg: "hello"
    })
})
  
blogRouter.put('/', (c) => {
    return c.json({
      msg: "hello"
    })
  })
  
blogRouter.get('/', (c) => {
    return c.text('hello')
})
  
blogRouter.get('/bulk', (c) => {
    return c.text('hello')
})
  

  
  