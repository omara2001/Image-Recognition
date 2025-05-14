# VisionAI - Image Recognition Frontend

![VisionAI Logo](https://img.shields.io/badge/VisionAI-Image%20Recognition-4f46e5?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+CiAgPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0tNS05aDEwdjJIN3oiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE2IiByPSIyIi8+Cjwvc3ZnPg==)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini-blue?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

A modern, user-friendly frontend for image analysis powered by Google's Gemini Vision API. Upload any image and get detailed AI-generated descriptions and analysis.


## ✨ Features

- 🖼️ **Drag & Drop** image uploads
- 🔍 **AI-powered image analysis** using Google's Gemini Vision API
- ✏️ **Custom prompts** to guide the AI analysis
- 📱 **Responsive design** that works on all devices
- 🎨 **Beautiful animations** for a polished user experience
- 📋 **Copy to clipboard** functionality for easy sharing


## 🛠️ Technologies Used

- HTML5
- CSS3 with animations and transitions
- Vanilla JavaScript (no frameworks)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Poppins)
- [Gemini Vision API](https://ai.google.dev/) for image analysis

## 📖 How to Use

1. **Open the application** in your web browser
2. **Upload an image** by:
   - Dragging and dropping an image file onto the upload area
   - Clicking the upload area to browse your files
3. **Add a custom prompt** (optional) to guide the AI analysis
4. **Click "Analyze Image"** to send the image to the API
5. **View the results** and copy them to your clipboard if needed

## 🔧 Installation

### Option 1: Quick Start (No Installation)

Simply open the `index.html` file in your web browser.

### Option 2: Local Server

For the best experience, serve the files using a local server:

```bash
# Using Python
python -m http.server

# Using Node.js
npx serve
```

Then open `http://localhost:8000` (or the port provided) in your browser.

## 🔌 API Integration

This frontend connects to a backend API that uses Google's Gemini Vision API for image analysis. The API endpoint is:

```
https://image-recognition-production.up.railway.app/analyze
```

The API accepts:
- `file`: The image file to analyze (required)
- `prompt`: Custom instructions for the AI (optional)

## 🎨 Customization

### Colors

The application uses CSS variables for easy customization. Edit the `:root` section in `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #4f46e5;
    --primary-light: #818cf8;
    --primary-dark: #3730a3;
    /* more variables... */
}
```

### Prompts

You can customize the default prompt by editing the `promptInput` value in `js/main.js`.

## 📱 Mobile Support

The application is fully responsive and works on:
- 📱 Smartphones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Google Gemini](https://ai.google.dev/) for the powerful vision API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the typography

---

Made with ❤️ by [Omar A](https://github.com/omara2001)
