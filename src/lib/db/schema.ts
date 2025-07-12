import { serial, varchar, pgTable, boolean } from 'drizzle-orm/pg-core'


export const todosTable = pgTable("todos", {
  id: serial().notNull().primaryKey(),
  title: varchar().notNull(),
  completed: boolean().default(false),
})
