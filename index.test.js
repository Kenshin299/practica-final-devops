const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

const dom = new JSDOM(html);
global.document = dom.window.document;

test('La pagina contiene el titulo y nombre del autor correctos!', () => {
    const titleElement = document.getElementById('main-title');
    const authorElement = document.getElementById('author-name');

    expect(titleElement).not.toBeNull();
    expect(authorElement).not.toBeNull();

    expect(titleElement.textContent).toBe('Practica Final DevOps');
    expect(authorElement.textContent).toBe('Kemyl Fernandez');
});
