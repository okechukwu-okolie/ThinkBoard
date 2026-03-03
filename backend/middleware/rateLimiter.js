import ratelimit from "../config/stash.js";

const rateLimiter = async (req, res, next) => {
    //import the ratelimit from the config file and use it to check if the user has exceeded the rate limit
try {
    //note: the 'my-limit-key' can be replaced with a unique identifier for the user, such as their IP address or user ID, to apply rate limiting on a per-user basis
    const {success} = await ratelimit.limit('my-limit-key')
    if(!success){
        return res.status(429).json({message: 'Too many requests, please try again later'})
    }
    next()
} catch (error) {
    console.log('Rate limit error:', error)
    res.status(500).json({message: 'Internal server error'})
    next(error)
}

}

export default rateLimiter;