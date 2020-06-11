# UCR-Life-Guide-App
Team Repository for UCR-Life-Guide-App


  **Setup Notes**
```
- Note that there may be some differences in installation if you’re on MacOS. 
- Note that you will also need JDK 1.8 (same as JDK 8) or above in order to use firebase 
- Some dependencies require python so make sure that is installed 
    - https://www.python.org/downloads/
      - Check the button that includes PATH during setup, if you forgot to do so
    - Some dependencies also require Visual Studio on your computer for windows 
      - npm install --global --production windows-build-tools
    - https://docs.expo.io/get-started/installation/
```
`1. Install node.js from website`  (https://nodejs.org/en/download/)
    - node.js includes npm
    - Npm will be used to install necessary tools
 
`2. npm install react-native`
    - Used to install react-native
  
`3. npm install -g expo-cli`
    - Install expo, we will be using to test the app on the phone, avoids emulators (Also provides error codes)
 
`4. Run expo whoami to verify the installation was successful`

`5. Create an account for expo`
    - expo register 
      - Requires:
        - Email
        - User
        - Password

`6. expo login (should be automatically logged in after signing up)`

`7. Download the expo app on iOS/Android`

```
**Running Instructions**
1. Clone :  https://github.com/YeeitsAlex/UCR-Life-Guide-App.git
  - You want to clone it inside your `Users` directory if you are on Windows, i.e. `C:\Users\YourUserName\UCR-Life-Guide-App`
2. After cloning the repo run cd into UCRLifeGuide (project directory) and run npm install
  - `npm install` is ran to install needed dependencies for running the application
3. After npm install finishes, should be able to run `expo start`  (in the terminal/cmd)  inside project directory
  - You will need to make sure your computer and your phone are on the same network 
  - The command will open up a browser tab, you can then scan QR code on your phone to open in expo to start the application.
```
