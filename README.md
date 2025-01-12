# Incorrect useState Hook Usage
This repository demonstrates a common mistake when using the useState hook in React Native.  The issue lies in directly modifying the state variable within the state update function, leading to incorrect rendering and unexpected behaviour.

## Problem
The provided code attempts to increment the count using `setCount(count + 1)`.  However, this approach doesn't trigger a re-render in React Native because it directly modifies the state variable instead of using a functional update that returns a new value. This is more pronounced when dealing with objects or nested states.

## Solution
The correct way is to pass a function to `setCount` that returns the updated value. This ensures that React can properly track changes and trigger a re-render.

## Usage
Clone this repository, and run `npm install` or `yarn install` to install the dependencies. Then run your react-native project with a suitable environment.