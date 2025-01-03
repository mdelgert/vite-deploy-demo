# vite-deploy-demo

[demo](https://mdelgert.github.io/vite-deploy-demo/)

[Setup nodejs](https://nodejs.org/en/download)
```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.12.0".
nvm current # Should print "v22.12.0".
# Verify npm version:
npm -v # Should print "10.9.0".
```

Use vanilla javascript in this demo
```bash
npm create vite@latest site
cd site
npm install
touch vite.config.ts
npm run dev
```

Setup github action
```bash
cd ..
mkdir .github
cd .github
mkdir workflows
cd workflows
touch deploy-github-pages.yml
```

Running the site
```bash
npm run start # Local dev same as npm run dev
npm run preview
npm run full # Full preview deletes all files and runs the site
```

# Links
[Vite](https://vite.dev/)
[JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Deploying Vite Deploying Vite App to GitHub Pages](https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3)

[Deploy Vite app to GitHub Pages using GitHub Actions](https://github.com/sitek94/vite-deploy-demo)

[bahmutov/npm-install@v1](https://github.com/bahmutov/npm-install)

[Deploying a Vite app on GitHub Pages using GitHub Actions with GitHub Secrets](https://dev.to/dwtoledo/deploying-a-vite-app-on-github-pages-using-github-actions-with-github-secrets-1hn0)

[Deploying a Static Site](https://vite.dev/guide/static-deploy)

[Multipage Vite Vanilla JavaScript](https://dev.to/mochamadboval/multipage-vite-vanilla-javascript-3i0l)

[vite-multipage](https://github.com/chriscalo/vite-multipage)

[Multi-Page App](https://vite.dev/guide/build.html#multi-page-app)