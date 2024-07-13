const generateLogo = require('../generateLogo');

describe('generateLogo', () => {
  it('should generate a circle with the correct color', () => {
    const response = {
      text: 'ABC',
      textColor: 'red',
      shape: 'Circle',
      shapeColor: 'blue'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should generate a square with the correct color', () => {
    const response = {
      text: 'DEF',
      textColor: 'green',
      shape: 'Square',
      shapeColor: 'yellow'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <rect x="70" y="20" width="160" height="160" fill="yellow" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">DEF</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should generate a triangle with the correct color', () => {
    const response = {
      text: 'GHI',
      textColor: 'blue',
      shape: 'Triangle',
      shapeColor: 'purple'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <polygon points="150,20 280,180 20,180" fill="purple" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">GHI</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should handle empty shape', () => {
    const response = {
      text: 'JKL',
      textColor: 'black',
      shape: '',
      shapeColor: ''
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">JKL</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  // Additional Tests
  it('should handle text longer than 3 characters', () => {
    const response = {
      text: 'ABCD',
      textColor: 'red',
      shape: 'Circle',
      shapeColor: 'blue'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABCD</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should handle missing shape color', () => {
    const response = {
      text: 'MNO',
      textColor: 'green',
      shape: 'Square',
      shapeColor: ''
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <rect x="70" y="20" width="160" height="160" fill="" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">MNO</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should handle invalid color inputs', () => {
    const response = {
      text: 'PQR',
      textColor: 'invalidColor',
      shape: 'Circle',
      shapeColor: 'invalidColor'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="invalidColor" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="invalidColor">PQR</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });

  it('should handle unrecognized shape', () => {
    const response = {
      text: 'STU',
      textColor: 'blue',
      shape: 'Hexagon',
      shapeColor: 'orange'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">STU</text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });


  it('should handle empty text', () => {
    const response = {
      text: '',
      textColor: 'black',
      shape: 'Triangle',
      shapeColor: 'pink'
    };

    const expectedOutput = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <polygon points="150,20 280,180 20,180" fill="pink" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black"></text>
</svg>
    `;
    
    expect(generateLogo(response).trim()).toBe(expectedOutput.trim());
  });
});
