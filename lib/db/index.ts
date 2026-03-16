// should be imported from a file in Step 2
import { relations } from './relations'
import { drizzle } from 'drizzle-orm/postgres-js'

const db = drizzle('<url>', { relations })
