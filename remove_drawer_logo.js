const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/\s*<img class="drawer-logo"[^>]*>\n?/g, '\n');
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Cleaned: ' + file);
}
console.log('Done.');
