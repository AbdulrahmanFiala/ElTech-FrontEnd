

export const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{7})$/);
    if (match) {
      return '+2' + match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return null;
  }