# JSON Fetch Utilities

Some Quality of Life wrappers built on top of the Fetch Api to work with JSON.

These functions significantly simplify interactions with a JSON API without the overhead of large dependencies

## Background
The fetch api is a great improvement over the AJAX XMLHttpRequest; however its not as simple as using a library like Axios. Sometimes we just want to talk to a JSON Resp API without all the boilerplate. That is what these utilities addresses.

## Example
```typescript
interface User {
  id?: string;
  email: string;
  name: string;
}

const user = await Get<User>('/api/user?id=1');

console.log(user.email)

const newUser = await Post<User>('/api/user', { email: 'test@test.com', name: 'John Doe'});

console.log(newUser.id);

```
