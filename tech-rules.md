🏗 Project Architecture & Current Focus
This isn't just about code; it's about the Stack.

Frontend: React / Next.js (Client-side trust models)

Backend: Next.js Route Handlers / Middleware (The "Gatekeeper" logic)

Infrastructure Layers: CDN simulation, Cache keys, and Reverse Proxies.

📍 Current Research: Cache Poisoning & Parser Differentials
I am currently obsessed with how infrastructure components talk to each other.

Parser Confusion: I’ve simulated scenarios where a client sends application/xml but the backend is forced into JSON.parse(). Why? To understand where trust boundaries fail.

The Cache Frontier: My current major focus is Web Cache Poisoning. I am building out CDN behaviors to see exactly how request normalization and cache keys can be manipulated to take over accounts.
