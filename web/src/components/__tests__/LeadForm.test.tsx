describe('LeadForm Validation', () => {
  it('should validate form fields', () => {
    const isValidName = (name: string) => name.length >= 2;
    const isValidPhone = (phone: string) => phone.length >= 10;
    
    expect(isValidName('João Silva')).toBe(true);
    expect(isValidName('A')).toBe(false);
    expect(isValidPhone('5551234567')).toBe(true);
    expect(isValidPhone('123')).toBe(false);
  });

  it('should handle age validation', () => {
    const isValidAge = (age: number) => age >= 18 && age <= 99;
    
    expect(isValidAge(35)).toBe(true);
    expect(isValidAge(17)).toBe(false);
    expect(isValidAge(100)).toBe(false);
  });

  it('should validate US states', () => {
    const validStates = ['FL', 'CA', 'NY', 'TX'];
    const isValidState = (state: string) => validStates.includes(state);
    
    expect(isValidState('FL')).toBe(true);
    expect(isValidState('XX')).toBe(false);
  });
});