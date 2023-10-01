# WanderMap 🌍

WanderMap is an interactive React web application designed for travelers to document and share their adventures. It allows users to mark locations on a map, add notes about their trips, and store their valuable travel data. The application features user authentication, a user-friendly homepage, product listings, pricing information, and several other key features. 🌟

## Features 🚀

#### Location Selection 📍
- Users can easily pinpoint their travel destinations on an interactive map.

#### Trip Notes 📝
- WanderMap enables users to attach detailed notes to their selected locations, making it a great travel diary companion.

#### Data Storage 📦
- All location data, including country and city information, along with user-generated notes, are securely stored in a database for future reference.

## Deployment + Demo 🚀

You can check out the demo here ➡️ [WanderMap Demo](https://wander-map.vercel.app/)

![WanderMap Demo](https://github.com/AviralMehrotra/WanderMap/assets/73425338/9cef7d6c-dd29-4f76-8233-c76810e982c5.gif)

## Getting Started 🏁

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/WanderMap.git
```

2. **Navigate to the project directory:**

```bash
cd WanderMap
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the development server:**

```bash
npm run start
```

5. **For running a local server:**

   - Change the `BASE_URL` in `CitiesContext.jsx` to:
   
     ```javascript
     const BASE_URL = "http://localhost:8000";
     ```
     
     and then run the following command:
     
     ```bash
     npm run server
     ```
     
     **or**
     
   - Use the hosted JSON file server on Render.

6. **Open your web browser and visit `http://localhost:3000` to experience WanderMap firsthand.**

## Technologies Used 💻

WanderMap is built using a combination of modern technologies and libraries to provide a seamless travel experience. The core technologies used in this project include:

- **React**: A popular JavaScript library for building interactive and dynamic user interfaces.

- **React-Leaflet**: A React wrapper for Leaflet, a powerful and customizable mapping library.

These technologies were chosen to ensure a smooth and engaging user experience while maintaining code quality and scalability.

## Contributing 🤝

Contributions are always welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

## License 📝

WanderMap is open-source and licensed under the MIT License. For details, see the [LICENSE](https://choosealicense.com/licenses/mit/) file.
