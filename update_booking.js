const fs = require('fs');
const file = 'book.html';

let content = fs.readFileSync(file, 'utf-8');

// 1. Remove Accommodation Style section
content = content.replace(/\s*<!-- Accommodation preference -->.*?<\/div>\s*<\/div>/s, '');

// 2. Remove Accommodation Summary Row
content = content.replace(/\s*<div class="summary-row"><span class="summary-label">Accommodation<\/span><span class="summary-val" id="sAccomm">—<\/span><\/div>/s, '');

// 3. Remove JS querying accommodation
content = content.replace(/\s*const acc = document\.querySelector\('input\[name="accommodation"\]:checked'\);\s*document\.getElementById\('sAccomm'\)\.textContent = acc \? acc\.value : '—';/s, '');

// 4. Update submitBooking function
const newSubmitBooking = `    function submitBooking() {
      const terms = document.getElementById('termsCheck');
      if (!terms.checked) {
        document.getElementById('termsError').classList.remove('hidden');
        return;
      }
      document.getElementById('termsError').classList.add('hidden');

      const btn = document.getElementById('submitBtn');
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-xs"></i> Redirecting to WhatsApp…';
      btn.disabled = true;

      setTimeout(() => {
        const tour = document.getElementById('sTour').textContent;
        const arrival = document.getElementById('sArrival').textContent;
        const departure = document.getElementById('sDeparture').textContent;
        const flex = document.getElementById('sFlexibility').textContent;
        const group = document.getElementById('sGroup').textContent;
        const exps = document.getElementById('sExp').textContent;
        const budget = document.getElementById('sBudget').textContent;
        const name = document.getElementById('sName').textContent;
        const emailInput = document.getElementById('sEmail').textContent;
        const phone = document.getElementById('sPhone').textContent;
        const country = document.getElementById('sCountry').textContent;
        const contactPref = document.getElementById('sContact').textContent;
        const requests = document.getElementById('sSpecial').textContent;

        const msg = \`Hello Royal Kandy Tours, I would like to plan my trip!\n\n\` +
                    \`*Tour:* \${tour}\n\` +
                    \`*Dates:* \${arrival} to \${departure} (\${flex})\n\` +
                    \`*Group:* \${group}\n\` +
                    \`*Experiences:* \${exps}\n\` +
                    \`*Budget:* \${budget}\n\n\` +
                    \`*Name:* \${name}\n\` +
                    \`*Email:* \${emailInput}\n\` +
                    \`*Phone:* \${phone}\n\` +
                    \`*Country:* \${country}\n\` +
                    \`*Prefers Contact By:* \${contactPref}\n\` +
                    \`*Special Requests:* \${requests}\`;

        const waUrl = \`https://wa.me/94770266988?text=\${encodeURIComponent(msg)}\`;
        window.open(waUrl, '_blank');

        document.getElementById('successEmail').textContent = emailInput !== '—' ? emailInput : 'you';
        document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('panelSuccess').classList.add('active');

        for (let i = 1; i <= 5; i++) {
          const ind = document.getElementById('stepIndicator' + i);
          if (ind) {
            ind.classList.remove('active');
            ind.classList.add('done');
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 800);
    }`;

// Replace the old submitBooking
content = content.replace(/\s*function submitBooking\(\) \{[\s\S]*?1500\);\s*\}/, '\n' + newSubmitBooking);

// We should also replace the success text from "We will send an email" to "We will reply to your WhatsApp"
content = content.replace(
    /<p class="text-muted font-light leading-relaxed max-w-sm mx-auto mb-8">We've received your request and will send a proposed itinerary to <span class="font-medium text-ink" id="successEmail">.*?<\/span> within 24 hours\.<\/p>/,
    `<p class="text-muted font-light leading-relaxed max-w-sm mx-auto mb-8">We're redirecting you to WhatsApp with your details. Nalinda will reply to you shortly to start planning your perfect trip!</p>`
);

fs.writeFileSync(file, content, 'utf-8');
console.log('Update complete.');
