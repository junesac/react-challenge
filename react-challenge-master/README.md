# React Challenge

This project represents a standard configuration of a React project at The Ashley Group and can be used for interview purposes.

If you look at the following URL https://api.github.com/users/dhh/events,
you will see a response containing data that is a history of the events of
dhh's interactions with github.

Your task is to update the react application to do the following:

- When the "Get Score" button is clicked, the application should
  read the JSON response from the URL and calculate a score for
  the users interactions.

- The score is calculated from the "type" key value pair, where
  - PushEvent = 5 points
  - PullRequestReviewCommentEvent = 4 points
  - WatchEvent = 3 points.
  - CreateEvent = 2 points.
  - Every other event = 1 point.

- Once calculated, the score should be rendered in place of the "n/a".

## Bonus

- Add a text input, whose value acts as a score multiplier.
- Center the page content vertically.

______

## Installation

```bash
# projet dependencies
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Test

```bash
# all
$ npm run test

# react
$ npm run test:eslint

# eslint
$ npm run test:eslint

# stylelint
$ npm run test:eslint
```

## Lint

```bash
# prettier
$ npm run format
```
