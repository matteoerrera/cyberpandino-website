export function showDialog()  {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.top = `-${scrollY}`;
};