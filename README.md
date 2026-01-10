# Daily Bloom 🌸

A discreet mental health journaling application designed to provide emotional support while maintaining user safety and privacy. Daily Bloom appears as a simple daily journal but includes hidden crisis support resources accessible through a discreet keyboard shortcut.

## 🎯 Purpose

Daily Bloom is designed for individuals who need access to mental health resources but may be in situations where openly seeking help could be unsafe. The app disguises itself as an innocuous daily journal while providing quick access to crisis hotlines and support resources.

## ✨ Features

### Journaling Interface

- **Auto-saving journal**: Write your thoughts with automatic local storage saves
- **Privacy-focused**: All journal entries are stored locally in your browser
- **Clean, minimal design**: Distraction-free writing experience with date tracking
- **Sentiment analysis**: Built-in sentiment analysis for journaling insights

### Camouflage Mode

- **Discreet appearance**: Looks like a regular daily journal app
- **Hidden support access**: Crisis resources are hidden until activated
- **Quick exit functionality**: Instantly close support mode if needed

### Crisis Support (Hidden Mode)

Activate support mode using **Cmd/Ctrl + .** to access:

- **988 Suicide and Crisis Lifeline**: 24/7 emotional distress support
- **National Domestic Violence Hotline**: 1-800-799-7233
- **Crisis Text Line**: Text HOME to 741741
- **Trevor Project (LGBTQ+ Youth)**: 1-866-488-7386
- **Emergency services**: Quick dial 911 button
- **Categorized resources**: Filter by general, domestic violence, suicide, or LGBTQ+ support

### Security Features

- **Keyboard shortcut activation**: Support mode activates with Cmd/Ctrl + . (discreet)
- **Long-press header**: Alternative activation method via header interaction
- **Escape key closes**: Quick exit with ESC key
- **Privacy-first**: No data sent to external servers

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v10.17.1 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd daily-bloom
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser to `http://localhost:5173`

## 📜 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint for code quality
- `pnpm test` - Run test suite with Vitest

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Sentiment Analysis**: sentiment.js library
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Package Manager**: pnpm

## 🔒 Privacy & Safety

- **Local storage only**: All journal data stays in your browser
- **No tracking**: No analytics or external data collection
- **Discreet design**: Appears as a simple productivity app
- **Quick escape**: Multiple ways to quickly hide support resources
- **Browser-based**: No installation history on device

## 🤝 Contributing

This is a sensitive project designed to help people in crisis. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

Please ensure all changes maintain the privacy and safety-focused design of the application.

## ⚠️ Disclaimer

This application provides information about crisis resources but is not a replacement for professional mental health care. If you are in immediate danger, please call 911 or your local emergency services.

## 🆘 Crisis Resources

If you or someone you know is in crisis:

- **988 Suicide and Crisis Lifeline**: Call or text 988
- **Crisis Text Line**: Text HOME to 741741
- **National Domestic Violence Hotline**: 1-800-799-7233
- **Emergency**: Call 911

---
