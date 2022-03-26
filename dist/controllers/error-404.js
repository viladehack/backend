"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = void 0;
const error404 = (req, res) => {
    res.status(404).json({
        msg: 'Error 404 - Page not found'
    });
};
exports.error404 = error404;
//# sourceMappingURL=error-404.js.map