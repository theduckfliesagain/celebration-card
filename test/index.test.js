const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        
    })

    
 
    it('should exist', () => {
        let body = document.querySelector("body");
        console.log(body.textContent);
        expect(body.innerHTML).toContain("</form>");
    })

    it('should contain a input for greeting, event and message', () => {
        let form = document.querySelector("form");
        expect(form.innerHTML).toContain("input");
        //expect(form.).toContain("greeting");
    });
});