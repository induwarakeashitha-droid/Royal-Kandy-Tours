const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');

    // 1. Price
    content = content.replace(/\/ per person/g, '/ for 3 people');

    // 2. Amenities grid item
    content = content.replace(/\s*<div class="text-center">\s*<i class="fa-solid fa-hotel.*?><\/i>\s*<p.*?>.*?<\/p>\s*<\/div>/gs, '');

    // Adjust grid classes
    content = content.replace(/grid-cols-2 md:grid-cols-4/g, 'grid-cols-2 md:grid-cols-3');

    // 3. Stay: spans
    content = content.replace(/\s*<span[^>]*>\s*<i class="fa-solid fa-hotel[^>]*><\/i>\s*Stay:[^<]*<\/span>/g, '');

    // 4. Specific text replacements
    content = content.replace(/Evening relaxation at hotel\./g, 'Evening relaxation.');
    content = content.replace(/Check into your hotel and enjoy/g, 'Settle in and enjoy');
    content = content.replace(/staying in handpicked boutique hotels and luxury resorts\./g, 'enjoying a carefully curated, comfortable journey.');
    content = content.replace(/a hillside hotel overlooking/g, 'a hillside location overlooking');
    content = content.replace(/We can adjust hotel choices,/g, 'We can adjust itinerary choices,');

    // 5. Remove the <li> with 4* & 5* hotels
    content = content.replace(/\s*<li[^>]*><i class="fa-solid fa-check[^>]*><\/i>[^<]*boutique hotels<\/li>/g, '');

    // 6. Any other stray fa-hotel icons
    content = content.replace(/\s*<i class="fa-solid fa-hotel[^>]*><\/i>/g, '');

    // 7. Galle description
    content = content.replace(/boutique hotels, galleries, and caf/g, 'boutique shops, galleries, and caf');
    
    // Also catch 'boutique hotels' in case there's another
    content = content.replace(/boutique hotels/g, 'boutique stays');

    fs.writeFileSync(path.join(dir, file), content, 'utf-8');
}
console.log('Done!');
