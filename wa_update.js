const fs = require('fs');
const path = require('path');
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');

    // Replace dummy phone numbers in tel: and wa.me links
    content = content.replace(/94770000000/g, '94770266988');
    
    // Replace visual phone numbers
    content = content.replace(/\+94 77 000 0000/g, '+94 77 026 6988');

    if (file === 'book.html') {
        // Upgrade the WhatsApp button to be solid
        const oldBtn = `<a href="https://wa.me/94770266988" target="_blank" class="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-3 text-sm font-medium">
                <i class="fa-brands fa-whatsapp text-green-400"></i>
                WhatsApp Nalinda
              </a>`;
        
        const newBtn = `<a href="https://wa.me/94770266988" target="_blank" class="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xl p-3 text-sm font-medium text-white shadow-md">
                <i class="fa-brands fa-whatsapp text-white text-lg"></i>
                WhatsApp Nalinda
              </a>`;
              
        content = content.replace(oldBtn, newBtn);
    }

    fs.writeFileSync(path.join(dir, file), content, 'utf-8');
}
console.log('Done with WhatsApp and phone updates');
