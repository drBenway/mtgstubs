# MTG Stubs - Magic: The Gathering Set Card Generator

A tool for generating Magic: The Gathering cards with official set symbols using the Keyrune icon font. The tool creates an interactive HTML page where you can pick sets and style your proxy cards.

## Features

- 📋 Generate proxy cards for all MTG sets (Core, Expansion, Commander, etc.)
- 🎨 Customizable card appearance (borders, fonts, backgrounds)
- 🖨️ Print-ready PDF output with proper card dimensions
- 🌐 Interactive HTML interface with filtering by set categories
- ⚙️ CSS custom properties for easy styling
- 🔤 Official set symbols via Keyrune font

## Prerequisites

- **Node.js** version 18 or higher
- **npm** (comes with Node.js)

## Installation

1. Clone or download this repository:
```bash
git clone <repository-url>
cd mtgstubs
```

2. Install dependencies:
```bash
npm install
```

This will install Puppeteer, which includes a bundled Chromium browser for PDF generation.

## Usage

### Generate Cards

Run the generator script:
```bash
npm start
```

Or directly:
```bash
node index.js
```

This will:
1. Generate an `index.html` file with all MTG sets organized by category

### View the HTML Page

Open the generated `index.html` file in a web browser to:
- Browse all available MTG sets
- Filter sets by category (Core, Expansion, Commander, etc.)
- Customize card appearance using the built-in controls
- Print directly from the browser

### Hosting as a Static Website

The generated `index.html` file can be hosted on any static web hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Any web server

Simply upload the following files:
- `index.html`
- `keyrune.css`
- `keyrune.ttf` (or other Keyrune font files)
- `print.css`

## Project Structure

```
mtgstubs/
├── index.js              # Main generator script
├── template.html         # HTML template for cards
├── print.css            # Print-specific styles
├── keyrune.css          # Keyrune icon font styles
├── keyrune.ttf          # Keyrune font file
├── scryfall.js          # Scryfall API integration
├── setinfo.json         # MTG set metadata
├── package.json         # Project dependencies
├── LICENSE              # MIT License
└── README.md            # This file
```

## Set Categories

The generator organizes MTG sets into the following categories:

- **Core Sets** - Base/Core editions (Alpha, Beta, Revised, etc.)
- **Expansion Sets** - All expansion sets from Arabian Nights to present
- **Commander** - Commander-specific products
- **Reprints** - Chronicles and other reprint sets
- **Beginners** - Starter and intro products
- **Duel Decks** - All Duel Deck releases
- **From the Vault** - FTV series
- **Premium** - Premium Deck Series
- **Spellbooks** - Signature Spellbook series
- **Global Series** - Global Series products
- **Guild Kits** - Ravnica guild kits
- **Supplements** - Supplemental sets (Modern Horizons, Time Spiral Remastered, etc.)
- **Promo** - Promotional cards and special releases
- **Un-sets** - Unglued, Unhinged, Unstable, etc.
- **Unofficial** - Collector's editions and unofficial releases

## Customization

### Card Appearance

The HTML interface includes controls to customize:
- **Border Color** - Change card border colors
- **Font Color** - Adjust text color
- **Background Color** - Modify card background
- **Border Width** - Set border thickness

These settings use CSS custom properties and are applied in real-time.

### Card Dimensions

Default card dimensions (defined in `template.html`):
- Width: 63mm
- Height: 88mm

These match standard MTG card sizes for printing.

### Modifying Sets

To add or modify sets, edit the relevant arrays in `index.js`:
- `core` - Core sets
- `expansionSets` - Expansion sets
- `commanderSets` - Commander products
- etc.

Each set object should include:
```javascript
{
  code: 'set-code',
  name: 'Set Name',
  set: 'category',
  released: 'YYYY-MM-DD'
}
```

## Set Data

Set information is sourced from the Scryfall API. The `scryfall.js` script can be used to fetch updated set data:
I've used ai to map the data from Scryfall to the required format. Not all fields in Keyrune are the same as in Scryfall.

```bash
node scryfall.js
```

This will update `setinfo.json` with the latest set information from Scryfall.

## Printing

For best printing results:
1. Open `index.html` in a modern browser (tested in Chrome)
2. Use the filter controls to select desired sets
3. Adjust card appearance as needed
4. Print using the browser's print function (Ctrl/Cmd + P)
5. Ensure "Print backgrounds" is enabled
6. Use actual size (100% scale) for accurate card dimensions
7. This has been tested on A4 paper size.(9 cards per page)



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software as long as you provide attribution to the original author.

## Credits

- **Keyrune** - MTG set symbol icon font by [Keyrune](https://keyrune.andrewgioia.com/)
- **Scryfall** - MTG card and set data API
- **Puppeteer** - Headless browser for PDF generation

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## Disclaimer

This tool is for personal use only. Magic: The Gathering is a trademark of Wizards of the Coast LLC. This project is not affiliated with or endorsed by Wizards of the Coast.

## Support

If you encounter any issues or have questions, please open an issue on the project repository.

---

Made with ❤️ for the MTG community

