const debounce = <T extends (...args: unknown[]) => void>(func: T, wait: number) => {
  let timeout: number | undefined;
  return (...args: unknown[]) => {
    const later = () => {
      timeout = undefined;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

export default debounce;
