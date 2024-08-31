export const formatCardNumber = (cardNumber:string) => {
    const cleaned = ('' + cardNumber).replace(/\D/g, '');
    
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
  
    return formatted;
};