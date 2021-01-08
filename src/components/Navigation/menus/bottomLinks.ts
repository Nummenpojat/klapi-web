export interface bottomLink {
    title: string;
    link: string;
}

export default class BottomLinks {
    private mapLink: bottomLink = {
        title: "Map",
        link: "/map"
    };
    private tasksLink: bottomLink = {
        title: "Tasks",
        link: "/tasks"
    };
    private checklistsLink: bottomLink = {
        title: "Checklists",
        link: "/checklists"
    };

    public getLinks(scoutMode:string) {
        if (scoutMode === "weeklyProgram") {
            return [this.tasksLink, this.checklistsLink];
        } else if (scoutMode === "camp") {
            return [this.mapLink, this.tasksLink];
        } else {
            return [];
        }
    }

    getAllLinks() {
        return [this.mapLink, this.tasksLink, this.checklistsLink];
    }
}