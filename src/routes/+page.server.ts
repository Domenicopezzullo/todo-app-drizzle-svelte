import db from "$lib/db"
import { todosTable } from "$lib/db/schema"
import type { Actions } from "@sveltejs/kit"
import { eq } from "drizzle-orm/pg-core/expressions"

export const load = async () => {
  return {
    todos: await db.select().from(todosTable).limit(50)
  }
}

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formdata = await request.formData()
    const title = formdata.get("title")
    if (typeof title === "string" && title) {
      await db.insert(todosTable).values({ title: title.toString() })
    }
  },
  deleteTodo: async({ request }) => {
    const formdata = await request.formData()
    const id = formdata.get("id")
    if (id) {
      await db.delete(todosTable).where(eq(todosTable.id, Number(id)))
    }
  }
}
