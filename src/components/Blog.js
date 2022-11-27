import React from "react";
import BlogGif from "../assets/Blog.gif";

const Blog = () => {
  return (
    <div className="container mx-auto md:mt-36 md:mb-28 mt-10 font-messiri">
      <div className="flex justify-center">
        <div className="md:w-1/2">
          <h1 className="font-bold text-3xl text-center">Blog</h1>
          <div>
            <article className="border p-5 rounded-lg my-5 shadow-lg">
              <h1 className="text-xl font-bold">1. What is "cors"?</h1>
              <p className="text-lg text-justify font-semibold">
                <span className="font-bold">Ans: </span>Cross-Origin Resource
                Sharing (CORS) is an HTTP-header based mechanism that allows a
                server to indicate any origins (domain, scheme, or port) other
                than its own from which a browser should permit loading
                resources. CORS also relies on a mechanism by which browsers
                make a "preflight" request to the server hosting the
                cross-origin resource, in order to check that the server will
                permit the actual request. In that preflight, the browser sends
                headers that indicate the HTTP method and headers that will be
                used in the actual request.
              </p>
            </article>
            <article className="border p-5 rounded-lg my-5 shadow-lg">
              <h1 className="text-xl font-bold">
                2. Why are you using "firebase"? What other options do you have
                to implement authentication?
              </h1>
              <p className="text-lg text-justify font-semibold">
                <span className="font-bold">Ans: </span>Firebase Authentication
                provides backend services, easy-to-use SDKs, and ready-made UI
                libraries to authenticate users to your app. It supports
                authentication using passwords, phone numbers, popular federated
                identity providers like Google, Facebook and Twitter, and more.
              </p>
              <p className="text-lg text-justify font-semibold">
                There are so many options for implement authentication. They
                are,
              </p>
              <ul className="text-lg text-justify font-semibold pl-10">
                <li>1. Stytch</li>
                <li>2. Ory</li>
                <li>3. Supabase</li>
                <li>4. Okta</li>
                <li>5. PingIdentity</li>
                <li>6. Keycloak</li>
                <li>7. Frontegg</li>
                <li>8. Authress</li>
                <li>9. Auth0</li>
                <li>10. Amazon Cognito</li>
              </ul>
            </article>
            <article className="border p-5 rounded-lg my-5 shadow-lg">
              <h1 className="text-xl font-bold">
                3. How does the private route work?
              </h1>
              <p className="text-lg text-justify font-semibold">
                <span className="font-bold">Ans: </span>The react private route
                component renders child components ( children ) if the user is
                logged in. If not logged in the user is redirected to the /login
                page with the return url passed in the location state property.
              </p>
            </article>
            <article className="border p-5 rounded-lg my-5 shadow-lg">
              <h1 className="text-xl font-bold">
                4. What is Node? How does Node work?
              </h1>
              <p className="text-lg text-justify font-semibold">
                <span className="font-bold">Ans: </span>Node.js is a JavaScript
                runtime environment that achieves low latency and high
                throughput by taking a “non-blocking” approach to serving
                requests. In other words, Node.js wastes no time or resources on
                waiting for I/O requests to return.
              </p>
              <p className="text-lg text-justify font-semibold">
                Node.js accepts the request from the clients and sends the
                response, while working with the request node.js handles them
                with a single thread. To operate I/O operations or requests
                node.js use the concept of threads. Thread is a sequence of
                instructions that the server needs to perform. It runs parallel
                on the server to provide the information to multiple clients.
                Node.js is an event loop single-threaded language. It can handle
                concurrent requests with a single thread without blocking it for
                one request.
              </p>
            </article>
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden justify-center h-fit mt-28">
          <img src={BlogGif} alt="Blog" className="fixed" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
