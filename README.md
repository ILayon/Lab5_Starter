# Lab 5 - Starter
Lab Partners: Isabelle Layon and James Ouyang

[github pages](https://ilayon.github.io/Lab5_Starter/)
[expose.html](https://ilayon.github.io/Lab5_Starter/expose.html)
[explore.html](https://ilayon.github.io/Lab5_Starter/explore.html)

1) I would not use a unit test to test the "message" feature of a messaging application. This is because of the con that unit testing cannot test how individual components
interact with each other on an application level, meaning we would be able to test if a user is able to write a message, but we will not be able to test if a user is successfully
able to send a message to another user (and that this user receives the message).

2) I would use a unit test to test the "max message length" feature of a messaging application. We would be able to debug this feature on a small scale, instead of accidentally affecting
any non related features or tests. We could simply run tests that make sure the user is prevented from typing messages with more than 80 characters.
