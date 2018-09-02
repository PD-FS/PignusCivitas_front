export class EventTypeIcons {

    public notification = new PignusIcon('secondary', 'notifications');
    public warning = new PignusIcon('energized', 'warning');
    public alert = new PignusIcon('danger', 'alert');

    public getIcon(eventType: number): PignusIcon {
        switch(eventType) {
            case 1: {
                return this.notification;
            }
            case 2: {
                return this.warning;
            }
            case 3: {
                return this.alert;
            }
            default: {
                return this.notification;
            }
        }
    }

}

export class PignusIcon {
    public color: string;
    public icon: string;

    constructor(color: string, icon: string) {
        this.color = color;
        this.icon = icon;
    }
}