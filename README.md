# Rendering events

This component displays events throughout a day while managing the overlap between two or more events. Tests are implemented in this project.

![Rendering events calendar](./media-assets/calendar.png)

## Stack technique

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

## Installation

```bash
npm install
```

## Run the application locally

---

```bash
npm start
```

#### URL `http://localhost:3000/`

## Running tests

```bash
npm test
```

---

## Features

- Events can overlap within the same time slot. The overlap of 2 events does not prevent their visibility.
- Each event occupies the maximum width.

## Data Persistence

- Data is stored in `public/input.json`.
- The data is represented by an array of events.
- An event is represented as follows:
  ```javascript
  {
      id: 1,
      start: '15:00', // The event starts at 03:00 pm
      duration: 90 // The duration is expressed in minutes
  }
  ```

## Areas for Improvement

- Display the indicator of the current time.
- Optimize performance by using hooks that allow it.
- Make the component more configurable.
- Improve test coverage.
