## Open Redirect
- Code location: api/data/route.js > https://yoursite.com/api/data?page=https://evil.com "notes: after ? is query string remember" 

- Vulnerable code:
# const page = searchParams.get('page') || '/'; 
# return NextResponse.redirect(new URL(page, request.url));

- analysis the code:  lets start from the first line in our vulnerable code please try to answer the queations alone without continue reading here 
- what does searchParams.get('page') grab ? it grabs the query string after ? and stroe it in page constant variable
- what does || '/'; mean ? (OR '||' is called Logical Operators in programming), also In web development, a single forward slash represent the root directory so if the page parameter query is no defined just redirect to root 

- what does NextResponse.redirect does ? it create the next  redirect response for the client 
- what parameter take new URL(page, request.url) and what it purpose ? it took two parameters (url, base)
- what is url and base ?  request.url =  is the full URL that the user visites in our case https://yoursite.com/api/data?page=https://evil.com and the base is the query string after page= {query-stirng} 
- so how this redirection happens? if the input string is relative path like /dashboard or /page whatever,  the browser keeps the domain from the base and swaps out the path
If the input page is a full absolute URL like https://evil.com, the JavaScript URL constructor completely ignores the base, The input overrides everything 
Base: [https://yoursite.com/api/data?page=https://evil.com](https://yoursite.com/api/data?page=https://evil.com)

Input (page): [https://evil.com](https://evil.com)

Resulting URL: [https://evil.com/](https://evil.com/)

and like that we understand the open-Redirect vulnerability now i want you to go and try to open your notes and copy the vulnerable code and try to explain it and the best way is to ask yourself as i did 

- Fix: whitelist allowed paths only
# const allowedPages = ['/', '/dashboard', '/about', '/contact', '/login', '/register'];

# if (!allowedPages.includes(page)) {
  # return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
# }



Hi, its me again , so we gonna dive into out new topic why do we use cookies ? we gonna dive into before that let us review our code at my-app/apps/api/login/route.js in our code there is a pieace of code:
 // Set HttpOnly cookie - JavaScript cannot touch this!
    response.cookies.set('isLoggedIn', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      path: '/',
      sameSite: 'lax',
      maxAge: 3600 // Valid for 1 hour
    });
    a queation the response.cookie.set is check if the user Logged in right ? but it give the parameter ture anyway so how the server should identify the user ? by what the answer is user_id right ? why do we need it more detailed because if user A logged in its gonna show that he is logged in before and if user B also tried to logged in is the same beacause of that issue we have to identify the user and set UNIQ identifier ? dont go wait am gonna tell you like what = JWT(JSON-web-token), or user_id or email or even session_id or auth_token or even username . 
    so after we set that uniq identifier we know now with who we are talking or who we are allowing to do what the server gonna search for this uniqe identifier in its DB and know whats the role and whats the state the user has 