import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

//create rate limit that allows 10 requests per minute per IP address
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'),
});

export default ratelimit;