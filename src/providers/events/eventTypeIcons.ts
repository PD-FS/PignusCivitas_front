export class EventTypeIcons {

    public notification = new PignusIcon('secondary', 'notifications');
    public warning = new PignusIcon('energized', 'warning');
    public alert = new PignusIcon('danger', 'alert');
    public information = new PignusIcon('information', 'information-circle');
    public catastrophe = new PignusIcon('catastrophe', 'nuclear');
    public accident = new PignusIcon('accident', 'flash');

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
            case 4: {
                return this.information;
            }
            case 5: {
                return this.catastrophe;
            }
            case 6: {
                return this.accident;
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