import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  
  /** Riot Games */
  RIOT_TOKEN: z.string()
});

const _env = envSchema.safeParse(process.env);

if(! _env.success )
{
  console.error(`[${new Date().toLocaleString().replace(',', ' |')}] 🟥 Invalid environment variable! ${_env.error.format()}`);
  throw new Error(`[${new Date().toLocaleString().replace(',', ' |')}] 🟥 Invalid environment variable! ${_env.error.format()}`);
}

export const env = _env.data;