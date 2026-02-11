# JS & TS Logic Exercises

A collection of programming logic exercises implemented in both **Vanilla JavaScript** and **TypeScript**. This project serves as a personal laboratory to practice fundamental concepts, algorithms, and the transition to type-safe development.

## Project Structure

- `js/`: Standard JavaScript solutions.
- `ts/`: TypeScript source files featuring static typing and modern syntax.
- `out/`: Transpiled JavaScript files (generated from the `ts/` directory).
- `tsconfig.json`: Configuration for the TypeScript compiler.

## Prerequisites

To work with the TypeScript files, you need to have the TypeScript compiler installed globally on your system:

```bash
npm install -g typescript
```

## 🚀 How to Run

### 1. Compile TypeScript

Since this project uses a global compiler, you can transpile the code by running:

```bash
# Compile all files once
tsc

# Watch mode (auto-compile on save)
tsc -w

```

The output files will be automatically placed in the `out/` folder according to the `tsconfig.json` settings.

### 2. Execute with Node.js

You can run any script (from the `js/` or `out/` folders) using Node:

```bash
node js/03-show-numbers.js
# or
node out/03-show-numbers.js

```

## 🧠 Key Learning Objectives

- Understanding the differences between dynamic (JS) and static (TS) typing.
- Mastering basic algorithms and data manipulation.
- Configuring build workflows using `tsconfig.json`.
- Maintaining clean and readable code practices.
