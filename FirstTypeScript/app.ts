module HelloTypeScript {
    export class ahmed {
        x: string;
        y: string;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            return _x + _y;
        }
        addrealage(x: number, y: number) {
            return alert(x + y);
        }

    }
}

window.onload = () => {
    var ahmed = new HelloTypeScript.ahmed('ahmed', 'refaey');
    ahmed.addrealage(20, 5);
};


