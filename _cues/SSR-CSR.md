### **Server-Side Rendering (SSR)**
- **Definition**: Server-side rendering means generating HTML content on the server and then sending it to the client. The page is regenerated for each request.
- **Use in App Router**:
- *By default, pages in App Router are **server components***, which means they are rendered on the server.
- Server components can fetch data directly in the page, suitable for scenarios that require real-time data.

### **Client-Side Rendering (CSR)**
- **Definition**: Client-side rendering means generating HTML content in the browser, usually through JavaScript. After the page is loaded on the client, JavaScript is used to dynamically update the content.
- **Use in App Router**:
- You can convert a server component to a client component by adding the `'use client'` directive to the top of the component.
- Client components can use browser-specific APIs and state management hooks, suitable for scenarios that require interactivity and dynamic updates.