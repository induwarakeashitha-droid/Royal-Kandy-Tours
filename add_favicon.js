const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const faviconTag = '<link rel="icon" type="image/png" href="assets/logo.png">';

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');

    // Skip if already has favicon
    if (content.includes('rel="icon"')) {
        console.log('Skipped (already has favicon): ' + file);
        continue;
    }

    // Insert after <meta charset...>
    content = content.replace(
        /(<meta charset[^>]+>)/i,
        '$1\n    ' + faviconTag
    );

    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated: ' + file);
}
console.log('Done.');
