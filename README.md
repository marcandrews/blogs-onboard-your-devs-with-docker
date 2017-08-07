# Onboard your devs onto your distributed application in minutes with Docker

Many of today's web applications are composed of multiple layers. At minimum, there are two: a frontend presentation layer that usually runs client side and a backend layer that provides the logic and data. It's common to have additional layers too, such as: a database layer, for example PostgreSQL or MongoDB, providing long-term data storage, and; a cache layer, for example Redis, for short-term, rapid-access data storage. It is even possible to have multiple backend layers each with their own concerns; for example, one layer responsible for RESTful requests, and another for Websockets, and another for computation-intensive requests.

These layers can be considered services, and together, they create your distributed application. But each service may have its own requirements, from different Node versions to conflicting library dependancies, and when you add in the fact that every developer's machine and environment is different, it can be a challenge to onboard new developers quickly. Wouldn't it be nice if we could onboard developers and get our application running, consistantly and predictably, with a few simple commands?

[Read the complete blog post here ...][RANGLE_BLOG_PART_1]


[RANGLE_BLOG_PART_1]: http://blog.rangle.io/