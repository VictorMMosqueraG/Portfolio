const fs = require('fs');
const path = require('path');

const serviceId  = process.env.EMAILJS_SERVICE_ID  || '';
const templateId = process.env.EMAILJS_TEMPLATE_ID || '';
const publicKey  = process.env.EMAILJS_PUBLIC_KEY  || '';

const dev = `export const environment = {
  production: false,
  emailjs: {
    serviceId:  '${serviceId}',
    templateId: '${templateId}',
    publicKey:  '${publicKey}',
  },
};
`;

const prod = `export const environment = {
  production: true,
  emailjs: {
    serviceId:  '${serviceId}',
    templateId: '${templateId}',
    publicKey:  '${publicKey}',
  },
};
`;

const dir = path.join('src', 'environments');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, 'environment.ts'), dev);
fs.writeFileSync(path.join(dir, 'environment.production.ts'), prod);

console.log('✅ Environments generated:');
console.log('serviceId:', serviceId ? '***' : 'EMPTY');
console.log('templateId:', templateId ? '***' : 'EMPTY');
console.log('publicKey:', publicKey ? '***' : 'EMPTY');
