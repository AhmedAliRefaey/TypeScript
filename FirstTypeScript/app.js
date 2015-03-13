var HelloTypeScript;
(function (HelloTypeScript) {
    var ahmed = (function () {
        function ahmed(_x, _y) {
            this.x = _x;
            this.y = _y;
            return _x + _y;
        }
        ahmed.prototype.addrealage = function (x, y) {
            return alert(x + y);
        };
        return ahmed;
    })();
    HelloTypeScript.ahmed = ahmed;
})(HelloTypeScript || (HelloTypeScript = {}));
window.onload = function () {
    var ahmed = new HelloTypeScript.ahmed('ahmed', 'refaey');
    ahmed.addrealage(20, 5);
};
//# sourceMappingURL=app.js.map