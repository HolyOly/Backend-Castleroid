/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst router_1 = __importDefault(__webpack_require__(/*! ./src/router */ \"./src/router.ts\"));\nconst port = 5000;\nconst LOGIN_PASSWORD = 'admin:admin';\nconst URL_DB = `mongodb+srv://${LOGIN_PASSWORD}@atlascluster.hi1wyqs.mongodb.net/?retryWrites=true&w=majority`;\nconst app = (0, express_1.default)();\napp.use((0, cors_1.default)());\napp.use(express_1.default.json());\napp.use('/api', router_1.default);\nfunction startClone() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            yield mongoose_1.default.connect(URL_DB, {\n                useNewUrlParser: true,\n                useUnifiedTopology: true,\n            });\n            app.listen(port, () => console.log(`server run, port ${port}`));\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\nstartClone();\n\n\n//# sourceURL=webpack://rsclone/./index.ts?");

/***/ }),

/***/ "./src/authentication/authController.ts":
/*!**********************************************!*\
  !*** ./src/authentication/authController.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/* eslint-disable no-underscore-dangle */\nconst authService_1 = __importDefault(__webpack_require__(/*! ./authService */ \"./src/authentication/authService.ts\"));\nconst user_1 = __importDefault(__webpack_require__(/*! ../registration/user */ \"./src/registration/user.ts\"));\nclass AuthController {\n    create(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const userLoginPassword = yield authService_1.default.create(request.body);\n                return response.json(userLoginPassword);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getAll(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const users = yield authService_1.default.getAll();\n                return response.json(users);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getOne(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield authService_1.default.getOne(request.params.id);\n                return response.json(user);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    update(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                user_1.default.find({ name: request.body.name, password: request.body.password }, (err, example) => __awaiter(this, void 0, void 0, function* () {\n                    if (err)\n                        console.log(err);\n                    if (example) {\n                        const userLoginPassword = yield authService_1.default.update(example[0]._id);\n                        return response.json(userLoginPassword);\n                    }\n                    return response.status(500).json({ result: 'this name is not exist' });\n                }));\n            }\n            catch (err) {\n                response.status(500).json(err);\n            }\n        });\n    }\n    delete(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield authService_1.default.delete(request.params.id);\n                return response.json(user);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n}\nexports[\"default\"] = new AuthController();\n\n\n//# sourceURL=webpack://rsclone/./src/authentication/authController.ts?");

/***/ }),

/***/ "./src/authentication/authService.ts":
/*!*******************************************!*\
  !*** ./src/authentication/authService.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst user_1 = __importDefault(__webpack_require__(/*! ../registration/user */ \"./src/registration/user.ts\"));\nclass AuthService {\n    create(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const userLoginPassword = yield user_1.default.create(user);\n            return userLoginPassword;\n        });\n    }\n    getAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const users = yield user_1.default.find();\n            return users;\n        });\n    }\n    getOne(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const user = yield user_1.default.findById(id);\n            return user;\n        });\n    }\n    update(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!user._id) {\n                throw new Error('no ID');\n            }\n            const updatedData = yield user_1.default.findByIdAndUpdate(user._id, user, { new: true });\n            return updatedData;\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const user = yield user_1.default.findByIdAndDelete(id);\n            return user;\n        });\n    }\n    startUserGame(id) {\n        const userID = id.toString().match(/[0-9a-z]/g).join('');\n        console.log(userID, 'login');\n        return userID;\n    }\n}\nexports[\"default\"] = new AuthService();\n\n\n//# sourceURL=webpack://rsclone/./src/authentication/authService.ts?");

/***/ }),

/***/ "./src/lead-borders/borders.ts":
/*!*************************************!*\
  !*** ./src/lead-borders/borders.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WinsScheme = exports.TimesScheme = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst Times = new mongoose_1.default.Schema({\n    name: { type: String, required: true, unique: true },\n    time: { type: String, required: true },\n    date: { type: String, required: true },\n});\nconst Wins = new mongoose_1.default.Schema({\n    name: { type: String, required: true, unique: true },\n    win: { type: String, required: true },\n    date: { type: String, required: true },\n});\nexports.TimesScheme = mongoose_1.default.model('Times', Times);\nexports.WinsScheme = mongoose_1.default.model('Wins', Wins);\n\n\n//# sourceURL=webpack://rsclone/./src/lead-borders/borders.ts?");

/***/ }),

/***/ "./src/lead-borders/timeController.ts":
/*!********************************************!*\
  !*** ./src/lead-borders/timeController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst timeService_1 = __importDefault(__webpack_require__(/*! ./timeService */ \"./src/lead-borders/timeService.ts\"));\nclass TimeController {\n    create(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const userNameTime = yield timeService_1.default.create(request.body);\n                return response.json(userNameTime);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getAll(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const times = yield timeService_1.default.getAll();\n                return response.json(times);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getOne(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const time = yield timeService_1.default.getOne(request.params.id);\n                return response.json(time);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    update(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const updateTime = yield timeService_1.default.update(request.body);\n                return response.json(updateTime);\n            }\n            catch (err) {\n                response.status(500).json(err);\n            }\n        });\n    }\n    delete(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const time = yield timeService_1.default.delete(request.params.id);\n                return response.json(time);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n}\nexports[\"default\"] = new TimeController();\n\n\n//# sourceURL=webpack://rsclone/./src/lead-borders/timeController.ts?");

/***/ }),

/***/ "./src/lead-borders/timeService.ts":
/*!*****************************************!*\
  !*** ./src/lead-borders/timeService.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst borders_1 = __webpack_require__(/*! ./borders */ \"./src/lead-borders/borders.ts\");\nclass TimeService {\n    create(time) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const createTime = yield borders_1.TimesScheme.create(time);\n            return createTime;\n        });\n    }\n    getAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const times = yield borders_1.TimesScheme.find();\n            return times;\n        });\n    }\n    getOne(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const time = yield borders_1.TimesScheme.findById(id);\n            return time;\n        });\n    }\n    update(time) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!time._id) {\n                throw new Error('no ID');\n            }\n            const updatedData = yield borders_1.TimesScheme.findByIdAndUpdate(time._id, time, { new: true });\n            return updatedData;\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const time = yield borders_1.TimesScheme.findByIdAndDelete(id);\n            return time;\n        });\n    }\n    startUserGame(id) {\n        const userID = id.toString().match(/[0-9a-z]/g).join('');\n        console.log(userID, 'login');\n        return userID;\n    }\n}\nexports[\"default\"] = new TimeService();\n\n\n//# sourceURL=webpack://rsclone/./src/lead-borders/timeService.ts?");

/***/ }),

/***/ "./src/lead-borders/winController.ts":
/*!*******************************************!*\
  !*** ./src/lead-borders/winController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst winService_1 = __importDefault(__webpack_require__(/*! ./winService */ \"./src/lead-borders/winService.ts\"));\nclass WinController {\n    create(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const userNameWin = yield winService_1.default.create(request.body);\n                return response.json(userNameWin);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getAll(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const wins = yield winService_1.default.getAll();\n                return response.json(wins);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getOne(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const win = yield winService_1.default.getOne(request.params.id);\n                return response.json(win);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    update(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const updateTime = yield winService_1.default.update(request.body);\n                return response.json(updateTime);\n            }\n            catch (err) {\n                response.status(500).json(err);\n            }\n        });\n    }\n    delete(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const win = yield winService_1.default.delete(request.params.id);\n                return response.json(win);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n}\nexports[\"default\"] = new WinController();\n\n\n//# sourceURL=webpack://rsclone/./src/lead-borders/winController.ts?");

/***/ }),

/***/ "./src/lead-borders/winService.ts":
/*!****************************************!*\
  !*** ./src/lead-borders/winService.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst borders_1 = __webpack_require__(/*! ./borders */ \"./src/lead-borders/borders.ts\");\nclass WinService {\n    create(win) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const createWin = yield borders_1.WinsScheme.create(win);\n            return createWin;\n        });\n    }\n    getAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const wins = yield borders_1.WinsScheme.find();\n            return wins;\n        });\n    }\n    getOne(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const win = yield borders_1.WinsScheme.findById(id);\n            return win;\n        });\n    }\n    update(win) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!win._id) {\n                throw new Error('no ID');\n            }\n            const updatedData = yield borders_1.WinsScheme.findByIdAndUpdate(win._id, win, { new: true });\n            return updatedData;\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const win = yield borders_1.WinsScheme.findByIdAndDelete(id);\n            return win;\n        });\n    }\n    startUserGame(id) {\n        const userID = id.toString().match(/[0-9a-z]/g).join('');\n        console.log(userID, 'login');\n        return userID;\n    }\n}\nexports[\"default\"] = new WinService();\n\n\n//# sourceURL=webpack://rsclone/./src/lead-borders/winService.ts?");

/***/ }),

/***/ "./src/registration/user.ts":
/*!**********************************!*\
  !*** ./src/registration/user.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst User = new mongoose_1.default.Schema({\n    name: {\n        type: String,\n        required: true,\n        unique: true,\n        dropDups: true,\n    },\n    password: { type: String, required: true },\n}, { collection: 'users' });\nexports[\"default\"] = mongoose_1.default.model('User', User);\n\n\n//# sourceURL=webpack://rsclone/./src/registration/user.ts?");

/***/ }),

/***/ "./src/registration/userController.ts":
/*!********************************************!*\
  !*** ./src/registration/userController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/* eslint-disable no-underscore-dangle */\nconst userService_1 = __importDefault(__webpack_require__(/*! ./userService */ \"./src/registration/userService.ts\"));\nconst user_1 = __importDefault(__webpack_require__(/*! ./user */ \"./src/registration/user.ts\"));\nclass UserController {\n    create(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                user_1.default.findOne({ name: request.body.name }, (err, example) => __awaiter(this, void 0, void 0, function* () {\n                    if (err)\n                        console.log(err);\n                    if (example) {\n                        response.status(500).json({ result: 'this name is already taken' });\n                    }\n                    else {\n                        const userLoginPassword = yield userService_1.default.create(request.body);\n                        return response.json(userLoginPassword);\n                    }\n                }));\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getAll(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const users = yield userService_1.default.getAll();\n                return response.json(users);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    getOne(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield userService_1.default.getOne(request.params.id);\n                return response.json(user);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n    update(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const updatedUser = yield userService_1.default.update(request.body);\n                return response.json(updatedUser);\n            }\n            catch (err) {\n                response.status(500).json(err);\n            }\n        });\n    }\n    delete(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield userService_1.default.delete(request.params.id);\n                return response.json(user);\n            }\n            catch (error) {\n                response.status(500).json(error);\n            }\n        });\n    }\n}\nexports[\"default\"] = new UserController();\n\n\n//# sourceURL=webpack://rsclone/./src/registration/userController.ts?");

/***/ }),

/***/ "./src/registration/userService.ts":
/*!*****************************************!*\
  !*** ./src/registration/userService.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst user_1 = __importDefault(__webpack_require__(/*! ./user */ \"./src/registration/user.ts\"));\nclass UserService {\n    create(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const userLoginPassword = yield user_1.default.create(user);\n            return userLoginPassword;\n        });\n    }\n    getAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const users = yield user_1.default.find();\n            return users;\n        });\n    }\n    getOne(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const user = yield user_1.default.findById(id);\n            return user;\n        });\n    }\n    update(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!user._id) {\n                throw new Error('no ID');\n            }\n            const updatedData = yield user_1.default.findByIdAndUpdate(user._id, user, { new: true });\n            return updatedData;\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!id) {\n                throw new Error('no ID');\n            }\n            const user = yield user_1.default.findByIdAndDelete(id);\n            return user;\n        });\n    }\n    startUserGame(id) {\n        const userID = id.toString().match(/[0-9a-z]/g).join('');\n        console.log(userID);\n        return userID;\n    }\n}\nexports[\"default\"] = new UserService();\n\n\n//# sourceURL=webpack://rsclone/./src/registration/userService.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst authController_1 = __importDefault(__webpack_require__(/*! ./authentication/authController */ \"./src/authentication/authController.ts\"));\nconst timeController_1 = __importDefault(__webpack_require__(/*! ./lead-borders/timeController */ \"./src/lead-borders/timeController.ts\"));\nconst winController_1 = __importDefault(__webpack_require__(/*! ./lead-borders/winController */ \"./src/lead-borders/winController.ts\"));\nconst userController_1 = __importDefault(__webpack_require__(/*! ./registration/userController */ \"./src/registration/userController.ts\"));\nconst router = express_1.default.Router();\nrouter.post('/users', userController_1.default.create);\nrouter.get('/users', authController_1.default.getAll);\nrouter.get('/users/:id', userController_1.default.getOne);\nrouter.put('/users', authController_1.default.update);\nrouter.delete('/users/:id', userController_1.default.delete);\nrouter.post('/times', timeController_1.default.create);\nrouter.get('/times', timeController_1.default.getAll);\nrouter.get('/times/:id', timeController_1.default.getOne);\nrouter.put('/times', timeController_1.default.update);\nrouter.delete('/times/:id', timeController_1.default.delete);\nrouter.post('/wins', winController_1.default.create);\nrouter.get('/wins', winController_1.default.getAll);\nrouter.get('/wins/:id', winController_1.default.getOne);\nrouter.put('/wins', winController_1.default.update);\nrouter.delete('/wins/:id', winController_1.default.delete);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://rsclone/./src/router.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./index.ts");
/******/ 	__webpack_require__("./src/router.ts");
/******/ 	__webpack_require__("./src/registration/user.ts");
/******/ 	__webpack_require__("./src/registration/userController.ts");
/******/ 	__webpack_require__("./src/registration/userService.ts");
/******/ 	__webpack_require__("./src/authentication/authController.ts");
/******/ 	__webpack_require__("./src/authentication/authService.ts");
/******/ 	__webpack_require__("./src/lead-borders/borders.ts");
/******/ 	__webpack_require__("./src/lead-borders/timeController.ts");
/******/ 	__webpack_require__("./src/lead-borders/timeService.ts");
/******/ 	__webpack_require__("./src/lead-borders/winController.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lead-borders/winService.ts");
/******/ 	
/******/ })()
;