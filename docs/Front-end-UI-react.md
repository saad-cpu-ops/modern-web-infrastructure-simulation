# React Frontend in Next.js — Complete Single Notes File

This document explains your entire frontend system in a modern Next.js application using React.

---

# 1. What is the Frontend?

The frontend is everything the user interacts with in the browser:

* pages (routes)
* buttons
* forms
* inputs
* navigation
* UI state

It is the visual layer of the application.

---

# 2. How Next.js Organizes the Frontend

In App Router structure:

```
app/
 ├── layout.tsx
 ├── page.tsx
 ├── login/page.tsx
 ├── dashboard/page.tsx
 └── components/
```

All .tsx files are React components.

React = UI system
Next.js = full framework (UI + backend + routing)

---

# 3. What is a React Component?

A component is a function that returns UI.

```tsx
export default function Button(){
  return <button>Click me</button>
}
```

Component = reusable UI block

---

# 4. Types of Components

## 4.1 Page Components (Routes)

```
app/login/page.tsx
```

```tsx
export default function LoginPage(){
  return <h1>Login Page</h1>
}
```

Becomes URL:

/login

---

## 4.2 Reusable UI Components

```
components/Button.tsx
```

```tsx
export default function Button({ text }){
  return <button>{text}</button>
}
```

Usage:

<Button text="Login" />

---

## 4.3 layout.tsx (IMPORTANT)

```
app/layout.tsx
```

This wraps ALL pages.

```tsx
export default function RootLayout({ children }){
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

Layout meaning:

EVERY PAGE = layout + page content

---

## layout.tsx Flow

User visits /login

1. layout.tsx loads first
2. global UI loads
3. page is injected into {children}
4. final UI renders

---

## Why layout.tsx matters

* shared UI (navbar/sidebar)
* global providers
* consistent structure

---

## Nested Layouts

```
app/
 ├── layout.tsx
 ├── dashboard/
 │     ├── layout.tsx
 │     └── page.tsx
```

Global layout + section layout

---

# 5. Props

Props = data passed into components.

```tsx
function UserCard({ name }){
  return <p>{name}</p>
}
```

<UserCard name="Knox99" />

Parent → Child data

---

# 6. State

State = dynamic data in UI

```tsx
"use client"
import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```

UI remembers data

---

# 7. Client vs Server Components

Server Component (default): runs on server

Client Component: runs in browser

"use client" enables interactivity

---

# 8. Events

```tsx
<button onClick={() => console.log("clicked")}>Click</button>
```

User action → function runs

---

# 9. Data Flow

Parent → Child via props

---

# 10. Rendering Lifecycle

1. request page
2. layout renders
3. page renders
4. HTML sent
5. React hydrates
6. user interacts

---

# 11. Full Mental Model

Frontend:

* page.tsx (screens)
* components (UI blocks)
* layout.tsx (structure)
* state (memory)
* props (data)

Backend:

* route.ts (API)
* middleware.ts (filtering)

---

# 12. Key Idea

React = UI layer
Next.js = full system

---

# 13. Summary

layout.tsx = skeleton
page.tsx = content
components = blocks
state = memory
props = communication
React = UI engine
Next.js = full architecture
