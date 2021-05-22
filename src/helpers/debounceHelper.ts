function debounce(func: (...parameters: any) => void, wait: number) {
    let timeoutId: number;

    return function (...parameters: any) {
        const later = () => {
            clearTimeout(timeoutId);
            func(...parameters);
        };

        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(later, wait);
    };
}

export default debounce;