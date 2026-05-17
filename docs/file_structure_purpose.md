# node_modules Notes

## What is `node_modules/` ?

`node_modules/` is the folder that contains all installed project dependencies.

Think of it as:

> "The project's downloaded package ecosystem."

When you run:

```bash
npm install
```

npm reads:

```txt
package.json
package-lock.json
```

then downloads packages into:

```txt
node_modules/
```

---

## Purpose

This folder stores:

- project dependencies
- dependency dependencies
- runtime libraries
- tooling packages

Examples:

- next
- react
- typescript
- eslint
- bcrypt
- axios

---

## Install Flow

Flow:

```txt
Developer
   ↓
npm install
   ↓
package.json
package-lock.json
   ↓
npm resolves packages
   ↓
downloads dependencies
   ↓
node_modules/
```

---

## Example

Suppose your project has:

```json
"dependencies": {
  "next":"16.x",
  "react":"19.x"
}
```

After:

```bash
npm install
```

you may get:

```txt
node_modules/
 ├── next/
 ├── react/
 ├── react-dom/
 ├── scheduler/
 ├── styled-jsx/
 └── hundreds of other packages
```

---

## Important Concept: Dependencies Have Dependencies

You install:

```txt
next
```

But Next.js itself depends on many packages.

Example idea:

```txt
next
 ├── react
 ├── react-dom
 ├── styled-jsx
 ├── packageA
 │    ├── packageB
 │    └── packageC
 └── packageD
```

This is called:

```txt
Dependency Tree
```

One installed package can pull hundreds of indirect packages.

---

## Where Does Next.js Live?

Earlier you asked:

> "where is the server?"

Part of the answer:

Next.js framework code exists inside:

```txt
node_modules/next/
```

The framework logic you use is downloaded there.

---

## Why node_modules Becomes Huge

Reasons:

### Deep Dependency Trees

Packages depend on other packages.

Example:

```txt
Project
 ↓
next
 ↓
react
 ↓
sub-packages
 ↓
more sub-packages
```

Very quickly:

```txt
hundreds
or
thousands
of packages
```

---

### Development Tooling

Not only runtime libraries.

Also:

- TypeScript
- ESLint
- testing tools
- build systems
- bundlers

---

## Common Commands

Install dependencies:

```bash
npm install
```

Install one package:

```bash
npm install axios
```

Remove package:

```bash
npm uninstall axios
```

Delete everything:

```bash
rm -rf node_modules
```

Reinstall:

```bash
npm install
```

---

## Why Developers Ignore It In Git

Normally:

```txt
DO NOT commit node_modules
```

Reason:

Huge size.

Generated automatically.

Instead commit:

```txt
package.json
package-lock.json
```

Others can recreate:

```bash
npm install
```

Typical `.gitignore`:

```txt
node_modules/
```

---

## Security Perspective

`node_modules` is important for security thinking.

Why?

Because this is your:

```txt
Supply Chain Surface
```

Your app trusts code downloaded from external packages.

Potential risks:

- malicious packages
- compromised maintainers
- typosquatting
- dependency confusion
- vulnerable libraries

Example:

Trusted:

```txt
express
```

Malicious typo:

```txt
expres
```

---

## Dependency Confusion Concept

Imagine:

Your project expects:

```txt
internal-company-package
```

Attacker publishes same name publicly.

Wrong package gets installed.

Possible:

```txt
Remote Code Execution
```

This is a real supply-chain attack pattern.

---

## Runtime Perspective

When your code runs:

Example:

```js
import bcrypt from 'bcrypt'
```

Node.js searches:

```txt
node_modules/bcrypt/
```

Module resolution concept:

```txt
Your Code
    ↓
import statement
    ↓
Node.js resolver
    ↓
node_modules lookup
    ↓
package found
```

---

## Infrastructure Thinking

Think of:

```txt
node_modules/
```

as:

> "Locally installed third-party software layer."

Your application is not only YOUR code.

It is:

```txt
Your Code
     +
Framework Code
     +
Dependency Code
     +
Dependency Dependencies
```

---

## Mental Model

Think:

### package.json

```txt
Developer Intent
```

"I want these packages."

---

### package-lock.json

```txt
Exact Version Snapshot
```

"Install these exact versions."

---

### node_modules

```txt
Physical Installed Reality
```

"The actual downloaded code."

-------------------------------------------------------------------------------------------------------------------------------------------------------
# next.config.ts Notes

## What is `next.config.ts` ?

`next.config.ts` is the global configuration file for Next.js.

It controls how the framework behaves during:

- development
- build time
- runtime

Think of it as:

> "Framework behavior configuration layer"

---

## Purpose

This file allows developers to customize:

- routing behavior
- redirects
- rewrites
- headers
- image handling
- experimental features
- compiler options
- build configuration

---

## File Variants

Next.js supports:

```txt
next.config.js
next.config.mjs
next.config.ts



# package.json + package-lock.json Notes

---

# package.json

## What is `package.json` ?

`package.json` is the main project manifest file in Node.js projects.

Think of it as:

> "Project metadata + dependency manager + command configuration"

It tells the ecosystem:

- what this project is
- which packages it uses
- how to run it
- which versions it expects

Without it, a modern JS project is basically missing its blueprint.

---

## Basic Structure

Example:

```json
{
  "name": "modern-web-infrastructure",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "16.x",
    "react": "19.x"
  }
}


--- 


## eslint.config.mjs Notes


# What is `eslint.config.mjs` ?

`eslint.config.mjs` is the configuration file for ESLint.

ESLint = JavaScript / TypeScript code linter.

Think of it as:

> "Code quality + style enforcement configuration"

It defines the rules that check your code.

---

## Purpose

This file tells ESLint:

- what rules to enforce
- what syntax is allowed
- which files to analyze
- which environments exist
- which plugins to use

It helps detect:

- bugs
- bad practices
- inconsistent code
- unused code
- style problems

---

## Basic Idea

Without ESLint:

```js
const x = 5

console.log(y)
