# Firebase CRUD for Timeline Project

This repository contains a sample application for practicing Firebase CRUD operations using React, Chakra UI, SCSS, and TypeScript. The project aims to provide a basic understanding of how to implement Create, Read, Update, and Delete operations in Firebase for future projects.

## Installation

To run the application locally, please follow these steps:

1.  Clone the repository:
        
    `git clone https://github.com/Dinujaya-Sandaruwan/Firebase-CRUD-for-timeline-project.git` 
    
2.  Navigate to the project directory:
    
    `cd Firebase-CRUD-for-timeline-project` 
    
3.  Install the dependencies:
        
    `npm install` 
    

## Configuration

Before running the application, you need to set up Firebase and configure it with your project's credentials. Follow these steps to configure Firebase:

1.  Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    
2.  Obtain the Firebase configuration object by clicking on the "Add Firebase to your web app" option and copy the configuration details.
    
3.  Create a new file called `.env` in the root directory of the project.
    
4.  Paste the Firebase configuration details into the `.env` file in the following format:
        
    `REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id` 
    
    Replace `your_api_key`, `your_auth_domain`, and other placeholders with your actual Firebase project details.
    

## Usage

To start the application, run the following command:

`npm run dev`

This command will start the development server, and you can access the application in your browser at `http://localhost:3000`.

## Project Structure

The project structure follows a common React application structure. Here's an overview of the main directories and files:

-   `src/`: Contains the application source code.
    -   `components/`: Contains reusable React components.
    -   `pages/`: Contains individual page components.
    -   `firebase/`: Contains Firebase configuration and utility functions for interacting with the Firebase database.
    -   `styles/`: Contains SCSS stylesheets.
    -   `App.tsx`: Entry point of the application.
    -   `index.tsx`: Renders the root component and sets up the React application.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Chakra UI](https://chakra-ui.com/)
-   [Firebase](https://firebase.google.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)

## Contact

If you have any questions or need further assistance, please feel free to contact the project maintainer at [info.dinujaya@gmail.com](mailto:info.dinujaya@gmail.com).
