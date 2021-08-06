# Encapsulation in OOP Javascript

This is an example of how encapsulation - a characteristic of OOP - can be implemented in Javascript.

In Javascript, the definition of **public**, **private** and **protected** is not as clear as other programming languages. Fields and Methods are public, and depends on whether we create object using **class** or **function**, the implementation of private and protected features will be quite different.

- For **class** based object, Javascript has supported [private feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) using a hash `#` prefix. However, protected feature is still not supported, so to implement it, we can take advantage of `getter`.
- For **function** based object, we can take advantage of `closure` to create private feature, and also use `getter` to implement protected one.