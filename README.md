# 🎮 Game Wishlist
![image](https://github.com/saltylex/game-wishlist-react/assets/68502135/a3dfc656-ee2d-4ffa-93c0-37c25b1c5c91)

## Overview

This project showcases a the frontend of a web application with CRUD functionalities, API calls, using a centralized Redux store for data management and MUI components. The main purpose of it is to showcase a concept for organizing and saving wishlists of video games.

## Technologies

- Frontend: Typescript, React, Redux, MUI

## Installation
Clone the repository to your local machine:
```shell
git clone https://github.com/saltylex/game-wishlist-react.git
```

Navigate to the frontend repository:

```shell
cd frontend
```

Install the project dependencies:

```shell
npm install
# or
yarn install
```

Start the development server:

```shell
npm start
# or
yarn start
```

Open your web browser and access the app at http://localhost:3000.

## Project Structure
Game Wishlist React is meticulously organized into modules for clarity and maintainability.

- **src/** contains the source code of the application, subdivided into modules.
  - **src/components/** holds reusable React components used throughout the app.
  - **src/client/** takes care of communication with a potential backend. for now, it uses dummy calls.
  - **src/containers/** stores containers for components and the Redux store logic.
  - **src/models/** holds all the necessary interfaces.
  - **src/pages/** contains the pages rendered in the app.
  - **src/store/** is responsible for managing all the Redux stores used by the app.


## License
Game Wishlist is licensed under the MIT License. Refer to the LICENSE.md file for details.
