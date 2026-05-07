# Corverse Talent Website

A premium staffing agency website built with React, Vite, and React Router.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5174/` to view the site locally.

## Deployment to GitHub Pages

Follow these steps to deploy your site:

### 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repo `corverse-talent`
3. Make it **Public**
4. Click "Create repository"

### 2. Push Your Code

```bash
cd c:\Users\nicho\Documents\Corverse
git init
git add .
git commit -m "Initial commit: Corverse Talent website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/corverse-talent.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your GitHub repository settings
2. Scroll down to **Pages** section
3. Under "Source," select **Deploy from a branch**
4. Choose branch: `gh-pages`
5. Click **Save**

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

- Automatically build the site whenever you push to `main`
- Deploy to the `gh-pages` branch
- Your site will be live at: `https://YOUR_USERNAME.github.io/corverse-talent/`

### 5. (Optional) Custom Domain

To use a custom domain like `corverse-talent.com`:

1. Update `.github/workflows/deploy.yml` with your domain (already added)
2. In your domain registrar (GoDaddy, Namecheap, etc.), point to GitHub Pages:
   - Add `A` records pointing to GitHub's IP addresses
   - Or use `CNAME` pointing to `YOUR_USERNAME.github.io`
3. In repo settings → Pages, add your custom domain
4. GitHub will automatically manage the HTTPS certificate

## File Structure

```text
corverse-talent/
├── src/
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── .github/
    ├── workflows/       # GitHub Actions
    └── agents/          # Custom agents
```

## Pages

- **Home** `/` - Hero section and core services
- **About** `/about` - Company story and values
- **Team** `/team` - Founders and team bios
- **Services** `/services` - Detailed service offerings
- **Candidates** `/candidates` - For job seekers
- **Clients** `/clients` - For hiring companies
- **Contact** `/contact` - Inquiry form

## Customization

### Update Copy

Edit the content in `src/pages/*.jsx` files directly.

### Update Colors

Edit the color palette in `src/styles.css`:

- Primary blue: `#1d3b6f` → change to your brand color
- Text color: `#111111`
- Accent: `#e6e8eb`

### Add Images

1. Create `src/images/` folder
2. Add your images (logos, team photos, etc.)
3. Import and use in components

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

---

**Questions?** Check the Vite docs: <https://vitejs.dev> or React Router: <https://reactrouter.com>
