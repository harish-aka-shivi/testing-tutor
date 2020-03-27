[![Build Status](https://travis-ci.org/harish-aka-shivi/testing-tutor.svg?branch=master)](https://travis-ci.org/harish-aka-shivi/testing-tutor)

# Testing Tutor
This app help will help students to learn about writing tests.

## Motivation
There are a lot of platforms to learn how to code(Leetcode, CodeChef) but there are very few to teach how to write tests. 

## Architecture decisions
- There has been a slight change is architecture in how the problems are evaluated. I started with the idea to evaluate on the node server with jest environment, but it will take time. So now most of the code is evaluated on the client side. As the correct answer is determined by string matching, I am deciding to go with it now.
- The node server is essentially serving the list of question when we are loading the page and rest of the logic: traking progress, number of problems solved is done on client side. This enables us to bypass the authentication.
- Problems are now stored in a file, but it may change as I make the process of making new question easy
- A `Problem` consists of `description`, list of `expects`, and each `expect` consits of unique `id`, `question`, `solution`, `solutionDescription`. 

## How to add questions
[This file](https://github.com/harish-aka-shivi/testing-tutor/tree/master/server/lib/data) will be the source of truth regarding to question for the immediate future. I am planning to add more questions and implement a standard format for the question.

## How to Contribute
Any type of contribution is welcome. Currently, I am in a process of thinking what is the best way forward. If you have any ideas feel free to let me know by either making an issue or telling me on any social contact. I have contact info in my bio. I would appreciate that a lot. 

## Ideas
- Support testing with Jest.
- Support Markdown.
- Support version to keep client and server in sync.
- Add more and better questions
