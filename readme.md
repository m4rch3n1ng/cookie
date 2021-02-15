# @m4rch/cookie

even though way overdone i wanted to make my own package to manage cookies in html

## Installation

use npm

```
$ npm i @m4rch/cookie
```

or my own cdn

```html
<script src="https://cdn.m4rch.xyz/cookie.js"></script>
```

if you want to include it into jquery you can either use a cdn for both

```html
<script src="https://cdn.m4rch.xyz/jquery.js"></script>
```

or

```html
<script src="https://cdn.m4rch.xyz/cookie-jq.js"></script>
```

if you want to include jquery via another cdn

## documentation

if you are using one of the jquery variants then you are going to have to use `$.cookie` instead of `cookie`

### .set(name, value, options?)

```js
cookie.set("name", "value")
```

JSON *objects* and *arrays* are automatically stringified with `JSON.stringify()` if they are passed as a value, *null* and *undefined* do not get assigned

options that can be passed are **path** and/or **expires** (in *days*)

```js
cookie.set("name", "value", { path: "/", expires: 365 })
```

the default for **path** is `/` and for **expires** is `""`, resulting in a session cookie

### .get(name?, options?)

for the value of a specific cookie use

```js
cookie.get("name")
```

JSON *objects* and *arrays* are automatically parsed by `JSON.parse()`, if you dont want that use

```js
cookie.get("name", { nojson: true })
```

for an `array` of every key-value pair use

```js
cookie.get()
```

### .remove(name, options?)

```js
cookie.remove("name")
```

if you want to specify a specific **path** use

```js
cookie.remove("name", { path: "" })
```

the default for **path** is `/`
