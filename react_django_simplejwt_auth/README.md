# About

The code in this directory was written by following the Authentication & Refreshing Tokens Implementation youtube video taught by Dennis Ivy.
Through the video, I was able to create and refresh JWT (JSON Web Tokens) tokens to authenticate the user and keep the user logged in when the user rerenders the page.<br><br>
Although the code works as intended, the JWT tokens are stored in localStorage which has security flaws and should really be stored in HttpOnly cookies so I am going to do more research on
authentication in a React/Django project.<br><br>
The link to the tutorial is the following:
 - [`https://www.youtube.com/watch?v=xjMP0hspNLE`](https://www.youtube.com/watch?v=xjMP0hspNLE)

The next link provides a fix towards an issue on the protected routes portion of the video because the video uses router-dom v5 intead of v6:
 - [`https://www.youtube.com/watch?v=2k8NleFjG7I`](https://www.youtube.com/watch?v=2k8NleFjG7I)

I've been doing a bit of research and have been getting a lot of mixed messages on whether storing JWT tokens in localStorage is okay or not. I think the concensus is that storing JWT
tokens in localStorage and HttpOnly cookies are both hackable, but HttpOnly cookies may be a bit more secure as client-side scripts are unable to access the tokens if it is stored in HttpOnly cookies.
My conclusion is that I should do authentication where my tokens are stored in HttpOnly cookies.
The following are some links on my research about this topic:
 - [`https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs`](https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs)
 - [`https://www.youtube.com/watch?v=M6N7gEZ-IUQ`](https://www.youtube.com/watch?v=M6N7gEZ-IUQ)
 - [`https://academind.com/tutorials/localstorage-vs-cookies-xss`](https://academind.com/tutorials/localstorage-vs-cookies-xss)
 - [`https://www.reddit.com/r/webdev/comments/x15xvg/jwt_storage_best_practices/`](https://www.reddit.com/r/webdev/comments/x15xvg/jwt_storage_best_practices/)