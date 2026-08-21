const fs = require('fs');
const file = 'book.html';

let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/94770000000/g, '94770266988');
content = content.replace(/\+94 77 000 0000/g, '+94 77 026 6988');

const newBtn = `<a href="https://wa.me/94770266988" target="_blank" class="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xl p-3 text-sm font-medium text-white shadow-md">
                <i class="fa-brands fa-whatsapp text-white text-lg"></i>
                WhatsApp Nalinda
              </a>`;

content = content.replace(/<a href="https:\/\/wa\.me\/94770266988".*?WhatsApp Nalinda\s*<\/a>/s, newBtn);

fs.writeFileSync(file, content, 'utf-8');
console.log('Done');
