# EZ Viewing Chrome Extension

A Chrome extension that improves video and audio playback on easyllama.com by automatically:

- Setting a faster playback rate (2x by default)
- Preventing media from pausing when the window loses focus
- Maintaining the faster playback rate when play is pressed

## Features

- Speeds up all video and audio playback
- Prevents auto-pausing when switching tabs or clicking outside the window
- Works specifically on easyllama.com domains
- Simple, lightweight implementation

## Installation

### Build from Source

1. Clone this repository:

   ```
   git clone https://github.com/yourusername/ez-viewing.git
   cd ez-viewing
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Build the extension:

   ```
   npm run build
   ```

   This will create a `dist` folder with the built extension.

### Load in Chrome

1. Open Chrome and navigate to `chrome://extensions/`

2. Enable "Developer mode" by toggling the switch in the top-right corner

3. Click "Load unpacked" and select the `dist` folder from the build step

4. The extension should now be installed and active in Chrome

5. Visit easyllama.com and the extension will automatically work

## Development

- `npm run dev` - Build in development mode with watch enabled
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## How It Works

The extension injects a content script that:

1. Sets the playback rate to 2x for all audio and video elements
2. Monitors for when playback is started and maintains the faster speed
3. Records media that was playing when window focus is lost
4. Automatically resumes playback when the window/tab loses focus

## License

[MIT License](LICENSE)
