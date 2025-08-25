# Node.js Mock Server

This project provides a simple Node.js mock server for serving mock files on `localhost:8088` for testing purposes.

## Features

- Serves static mock files (JSON, XML, etc.) from a specified directory
- Easy setup and configuration
- Useful for frontend/backend integration testing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd mockserver
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Usage

1. Place your mock files in the `mocks/` directory.

2. Start the server:
    ```bash
    node server.js
    ```

3. Access your mock files at:
    ```
    http://localhost:8088/<filename>
    ```

## Example

If you have a file `mocks/users.json`, you can access it at:
```
http://localhost:8088/users.json
```

## Customization

- Change the port or mock directory in `server.js` as needed.

## License

MIT
