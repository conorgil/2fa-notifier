This project uses Typescript because I hate
normal JS and the silly runtime bugs that 
are so easily avoided at compile time.

# Install dependencies
`npm install`

# Build
To run the build a single time:

`npm run build`

To run the build and leave it watching for
changes in the Typescript files and auto-build
them:

`npm run watch`

# Load extension into Chrome
After running the build:

1. Go to `chrome://extensions`
2. Making sure that developer mode is enabled
   by checking the switch in the top right
3. Click `LOAD UNPACKED`
4. Select the `src/extension` directory

# Load extension in Firefox
This is quite a bit easier because Firefox
has a handy tool to do this for us.

`npm run ff`