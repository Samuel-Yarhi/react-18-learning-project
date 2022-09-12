export const UserGreeting = () => {
    const isLoggedIn = true;
    // return <div>Welcome {isLoggedIn ? 'Samuel' : 'Guest'}</div>
    // ternary operator above, the expression is checked, if it is true, it prints Samuel, if not, it prints Guest
    return <div>Welcome {isLoggedIn && 'Samuel'}</div>
    //Short-circuit && operator, this first checks the isLoggedIng expression and then the right side of code.
    //If the expression is false, it no longer checks the right side of the expression (performance-friendly)
}