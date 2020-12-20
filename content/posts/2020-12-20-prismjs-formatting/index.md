---
author: John Doe
title: Using prism-react-renderer to format code blocks
date: 2020-12-20
published: true
---

This post is about testing PrismJS code formatting with various programming
languages.

Using code formatting follows markdown specification, i.e. triple backticks and
optionally programming language given. Optionally, `lineNumbers` can be given in
the first line after programming language, to turn on line numbering.

````markdown
```python lineNumbers
print("Hello, world!")
```
````

The markdown above is rendered as follows:

```python lineNumbers
print("Hello, world!")
```

## Python

```python lineNumbers
import datetime

print("Now is ", datetime.datetime.now())

def hello(name: str, count: int) -> int:
    for i in range(count):
        print(f"Hello, {name}")
        if i > 3:
            break
    return len(name)
```

## JavaScript

```js
const Hello = () => {
  const str = 'Hello, world!';
  return <div>{str}</div>;
};

<Hello />;

(function someDemo() {
  var test = 'Hello World!';
  console.log(test);
})();

return () => <App />;
```

## Julia

```julia
function hello()
    println("Hello, world")
end
```

## Bash

```bash
echo "Hello, world!"
```
