// The optional chaining operator ?.
let user = getUser(2);
let profile = user ?. profile;

{
    let user = getUser(2);
    let profile = (user !== null || user !== undefined)
            ? user.profile
            : undefined;

}