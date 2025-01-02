Creating a Vite project with vanilla JavaScript is straightforward. Follow these steps:

### 1. **Install Node.js**
   Ensure that Node.js is installed on your system. You can download it from [Node.js](https://nodejs.org).

   Verify installation:
   ```bash
   node -v
   npm -v
   ```

### 2. **Create the Project**
   Open a terminal and run the following commands:

   1. **Create a new Vite project**:
      ```bash
      npm create vite@latest my-vite-app
      ```
      Replace `my-vite-app` with your desired project name.

   2. **Select the template**:
      When prompted, choose `vanilla` (for plain JavaScript without any frameworks).

   3. **Navigate to the project folder**:
      ```bash
      cd my-vite-app
      ```

### 3. **Install Dependencies**
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

### 4. **Run the Development Server**
   Start the development server with:
   ```bash
   npm run dev
   ```
   This will serve the application at a local URL, typically `http://localhost:5173`.

### 5. **Project Structure**
   After setup, your project structure will look like this:
   ```
   my-vite-app/
   ├── index.html
   ├── package.json
   ├── vite.config.js
   ├── node_modules/
   ├── public/
   └── src/
       ├── main.js
       └── style.css
   ```

### 6. **Build for Production**
   When you're ready to deploy your app, build the project with:
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

### 7. **Preview Production Build**
   To preview the production build locally, run:
   ```bash
   npm run preview
   ```