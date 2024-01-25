# About

The code in this directory was written by following the Authentication & Refreshing Tokens Implementation youtube video taught by Dennis Ivy.
Through the video, I was able to create and refresh JWT (JSON Web Tokens) tokens to authenticate the user and keep the user logged in when the user rerenders the page.<br><br>
Although the code works as intended, the JWT tokens are stored in localStorage which has security flaws and should really be stored in HttpOnly cookies so I am going to do more research on
authentication in a React/Django project.<br>
The link to the tutorial is the following:
 - [`https://www.youtube.com/watch?v=xjMP0hspNLE`](https://www.youtube.com/watch?v=xjMP0hspNLE)

The next link provides a fix towards an issue on the protected routes portion of the video because the video uses router-dom v5 intead of v6:
 - [`https://www.youtube.com/watch?v=2k8NleFjG7I`](https://www.youtube.com/watch?v=2k8NleFjG7I)
