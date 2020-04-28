### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React router provides client-side URL routing

- What is a single page application?
  - single page applications don't require the page to refresh with every user action

- What are some differences between client side and server side routing?
  - server side routing typically involves a request for a new page which causes a page refresh. Client side routes are handled internally by the browser and javascript loaded on the page. when a link is clicked, the URL changes but there is no request to the server for a new page. Instead the state of the application is changed to a new view, or rendering a new component. The downside of client-side is that many times the entire application needs to be preloaded, making initial loading time slower than server side. Client side rendered pages are not as search engine optimized as server side.

- What are two ways of handling redirects with React Router? When would you use each?
  - there is Redirect() and history.push. Redirects will navigate to a new location and not be stored in the browser's history stack. the push function will push a new entry onto the history stack. Best to use Redirect in router Switch situations, like redirecting to a 404 or default home page. push should be used for declarative direction, like stepping through a multi-page form process.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Use ```<Redirect/>``` or a default ```<Route/>``` at the bottom of a Switch statement as a catch-all for unknown routes. 

- How do you grab URL parameters from within a component using React Router?

  set "thing" as URL parameter: ```<Route path="/somethings/:thing"><Something></Route>```

  useParams() returns object containing "thing" which can be used in the component: ```function Something() { {thing} = useParams() }```

- What is context in React? When would you use it?
    - context allows for global application states. it's useful in applications where deeply nested components rely on the state of parent components that are levels higher, reducing the need to pass props through multiple layers of the component heirarchy.

- Describe some differences between class-based components and function
  components in React.
    - class-based components were necessary to handle state in react (before hooks). functional components were used as 'dumb' components, which only returned a render function with props passed into it.


- What are some of the problems that hooks were designed to solve?
    - hooks allow function components to utilize state. in component lifecycles, hooks allow splitting the component into smaller related functions instead of forcing a split based on lifecycle methods. useState and useEffect are some of the more common hooks included with React, and custom hooks can be written.