"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_404_1 = require("../controllers/error-404");
const router = (0, express_1.Router)();
router.get('/', error_404_1.error404);
router.post('/', error_404_1.error404);
router.put('/', error_404_1.error404);
router.delete('/', error_404_1.error404);
exports.default = router;
//# sourceMappingURL=error-404.js.map