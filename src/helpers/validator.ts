const Validator = (name: string, data: string): string[] => {
  const errors = [];

  switch (name) {
    case 'exercise':
    case 'routine':
      if (!data.length) {
        errors.push('this field is required');
      }

      break;
    default:
      break;
  }
  return errors;
};

export default Validator;
