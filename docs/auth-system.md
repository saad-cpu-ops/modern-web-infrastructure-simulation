## Open Redirect
- Code location: api/data/route.js
- Vulnerable code: const page = searchParams.get('page') || '/';
return NextResponse.redirect(new URL(page, request.url));
- Attack scenario: 
- Fix: [we haven't written this yet]





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