export class Listener {
    element: HTMLElement | null;
    event: string;
    callback: EventListenerOrEventListenerObject;

    constructor(querySelector: string, event: string, callback: EventListenerOrEventListenerObject) {
        this.element = document.querySelector(querySelector);
        this.event = event;
        this.callback = callback;
        
        this.element?.addEventListener(this.event, this.callback);
    }
}

export const Server = {
    async get(url: string) {
        const response = await fetch(url);
        return await response.json();
    },
    async post(url: string, data: any) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
}