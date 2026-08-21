const fs = require('fs');
const path = require('path');
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    if (file === 'index.html') continue; // #reviews exists here, leave it

    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    content = content.replace(/href="#reviews"/g, 'href="index.html#reviews"');
    fs.writeFileSync(path.join(dir, file), content, 'utf-8');
    console.log('Updated: ' + file);
}
console.log('Done');
