import React from "react";
import Accordion from "../components/common/Accordion";
import Container from "../components/common/Container";

const Blog = () => {
  return (
    <Container CS="min-h-screen ">
      <div className="max-w-[700px] mx-auto py-8 px-1">
        <Accordion title="What is cors?">
          <p>
            <strong>Cross-Origin Resource Sharing (CORS)</strong> is an
            HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. CORS also relies on a
            mechanism by which browsers make a "preflight" request to the server
            hosting the cross-origin resource, in order to check that the server
            will permit the actual request. In that preflight, the browser sends
            headers that indicate the HTTP method and headers that will be used
            in the actual request.
          </p>
        </Accordion>
        <Accordion title="Why are you using firebase? What other options do you have to implement authentication?">
          <p>
            <strong>Firebase</strong> helps you develop high-quality apps, grow
            your user base, and earn more money. Each feature works
            independently, and they work even better together.
          </p>
          <p>
            When you build a client-side app with JavaScript or any of its
            frameworks, for instance, Google Firebase can turn this into a
            serverless app in no time. It also removes the need to manage
            databases yourself, as it does that for you.
          </p>
          <h1 className="text-xl font-bold py-2">
            Some options have to implement authentication
          </h1>

          <ul>
            <li className="list-disc ml-4">Drop-in authentication solution</li>
            <li className="list-disc ml-4">
              Email and password based authentication
            </li>
            <li className="list-disc ml-4">Phone number authentication</li>
            <li className="list-disc ml-4">Anonymous auth</li>
            <li className="list-disc ml-4">Multi-factor authentication</li>
            <li className="list-disc ml-4">SAML, OpenID Connect</li>
          </ul>
        </Accordion>
        <Accordion title="How does the private route work?">
          <p>
            <strong>Private route</strong> component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. only change is that redirect URL and
            authenticate condition. Protected routes are those routes that only
            grant access to authorized users
          </p>
        </Accordion>
        <Accordion title="What is Node? How does Node work?">
          <p>
            <strong>Working of Node.js:</strong> Node.js accepts the request
            from the clients and sends the response, while working with the
            request node.js handles them with a single thread. To operate I/O
            operations or requests node.js use the concept of threads. Thread is
            a sequence of instructions that the server needs to perform. It runs
            parallel on the server to provide the information to multiple
            clients. Node.js is an event loop single-threaded language. It can
            handle concurrent requests with a single thread without blocking it
            for one request.
          </p>
          <strong>Node.js basically works on two concept</strong>
          <ul>
            <li className="list-disc ml-4">Asynchronous</li>
            <li className="list-disc ml-4">Non-blocking I/O</li>
          </ul>
        </Accordion>
      </div>
    </Container>
  );
};

export default Blog;
