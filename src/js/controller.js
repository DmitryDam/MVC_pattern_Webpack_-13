import {set, get} from "../services/storage";
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addNote.bind(this));
        view.on('remove', this.removeNote.bind(this));

        const readStore = get();
        this.firstRender(readStore);
    }
    firstRender(arr) {
        arr.forEach(element => {
            this.addNote(element.title)
        });
    }

    addNote(title) {
        const item = this.model.addItem(title);
        this.view.addNote(item);
    }
    removeNote(id) {
        this.model.removeItem(id);
        this.view.removeNote(id);
    }
}
