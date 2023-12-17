const fs = require('fs');
const path = require('path');

test('La pagina contiene el titulo y nombre del autor correctos!', () => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

    // Your test logic here
    const titleMatch = /<h1[^>]*>([^<]+)<\/h1>/i.exec(html);
    const authorMatch = /<h2[^>]*>([^<]+)<\/h2>/i.exec(html);

    // Check if the elements exist
    expect(titleMatch).toBeTruthy();
    expect(authorMatch).toBeTruthy();

    // Check the content of the elements
    expect(titleMatch[1].trim()).toBe('Practica Final DevOps');
    expect(authorMatch[1].trim()).toBe('Kemyl Fernandez');
});
