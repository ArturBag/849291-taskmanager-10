/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/blocks.js":
/*!**********************************!*\
  !*** ./src/components/blocks.js ***!
  \**********************************/
/*! exports provided: createContent, createBoardTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContent", function() { return createContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBoardTasks", function() { return createBoardTasks; });
const createContent = () => `<section class="board container"></section>`;
const createBoardTasks = () => `<div class="board__tasks"></div>`;


/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const createButton = () => `<button class="load-more" type="button">load more</button>`;


/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const createCard = () =>
  `<article class="card card--black">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">Example default task with default color.</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                  <span class="card__time">11:15 PM</span>
                </p>
              </div>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #todo
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #personal
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #important
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;


/***/ }),

/***/ "./src/components/controls.js":
/*!************************************!*\
  !*** ./src/components/controls.js ***!
  \************************************/
/*! exports provided: createSearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchForm", function() { return createSearchForm; });
const createSearchForm = () =>
  `<section class="main__filter filter container">
    <input
      type="radio"
      id="filter__all"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__all" class="filter__label">
      All <span class="filter__all-count">13</span></label
    >
    <input
      type="radio"
      id="filter__overdue"
      class="filter__input visually-hidden"
      name="filter"
      disabled
    />
    <label for="filter__overdue" class="filter__label"
      >Overdue <span class="filter__overdue-count">0</span></label
    >
    <input
      type="radio"
      id="filter__today"
      class="filter__input visually-hidden"
      name="filter"
      disabled
    />
    <label for="filter__today" class="filter__label"
      >Today <span class="filter__today-count">0</span></label
    >
    <input
      type="radio"
      id="filter__favorites"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__favorites" class="filter__label"
      >Favorites <span class="filter__favorites-count">1</span></label
    >
    <input
      type="radio"
      id="filter__repeating"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__repeating" class="filter__label"
      >Repeating <span class="filter__repeating-count">1</span></label
    >
    <input
      type="radio"
      id="filter__tags"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__tags" class="filter__label"
      >Tags <span class="filter__tags-count">1</span></label
    >
    <input
      type="radio"
      id="filter__archive"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__archive" class="filter__label"
      >Archive <span class="filter__archive-count">115</span></label
    >
  </section>`;


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: createFilterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterList", function() { return createFilterList; });
const createFilterList = () =>
  `<div class="board__filter-list">
  <a href="#" class="board__filter">SORT BY DEFAULT</a>
  <a href="#" class="board__filter">SORT BY DATE up</a>
  <a href="#" class="board__filter">SORT BY DATE down</a>
</div>`;


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenu", function() { return createMenu; });
const createMenu = () =>
  `<section class="control__btn-wrap">
  <input
    type="radio"
    name="control"
    id="control__new-task"
    class="control__input visually-hidden"
  />
  <label for="control__new-task" class="control__label control__label--new-task"
    >+ ADD NEW TASK</label
  >
  <input
    type="radio"
    name="control"
    id="control__task"
    class="control__input visually-hidden"
    checked
  />
  <label for="control__task" class="control__label">TASKS</label>
  <input
    type="radio"
    name="control"
    id="control__statistic"
    class="control__input visually-hidden"
  />
  <label for="control__statistic" class="control__label"
    >STATISTICS</label
  >
</section>`;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blocks.js */ "./src/components/blocks.js");
/* harmony import */ var _components_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls.js */ "./src/components/controls.js");
/* harmony import */ var _components_filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters.js */ "./src/components/filters.js");
/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards.js */ "./src/components/cards.js");
/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_cards_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/button.js */ "./src/components/button.js");
/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_button_js__WEBPACK_IMPORTED_MODULE_5__);

// const renderElement = (container, template, place) => {
//   container.insertAdjacentHTML(place, template);
// };

// const CARDS_QTY = 3;

// const createMenu = () =>
//   `<section class="control__btn-wrap">
//   <input
//     type="radio"
//     name="control"
//     id="control__new-task"
//     class="control__input visually-hidden"
//   />
//   <label for="control__new-task" class="control__label control__label--new-task"
//     >+ ADD NEW TASK</label
//   >
//   <input
//     type="radio"
//     name="control"
//     id="control__task"
//     class="control__input visually-hidden"
//     checked
//   />
//   <label for="control__task" class="control__label">TASKS</label>
//   <input
//     type="radio"
//     name="control"
//     id="control__statistic"
//     class="control__input visually-hidden"
//   />
//   <label for="control__statistic" class="control__label"
//     >STATISTICS</label
//   >
// </section>`;

// const createSearchForm = () =>
//   `<section class="main__filter filter container">
//     <input
//       type="radio"
//       id="filter__all"
//       class="filter__input visually-hidden"
//       name="filter"
//       checked
//     />
//     <label for="filter__all" class="filter__label">
//       All <span class="filter__all-count">13</span></label
//     >
//     <input
//       type="radio"
//       id="filter__overdue"
//       class="filter__input visually-hidden"
//       name="filter"
//       disabled
//     />
//     <label for="filter__overdue" class="filter__label"
//       >Overdue <span class="filter__overdue-count">0</span></label
//     >
//     <input
//       type="radio"
//       id="filter__today"
//       class="filter__input visually-hidden"
//       name="filter"
//       disabled
//     />
//     <label for="filter__today" class="filter__label"
//       >Today <span class="filter__today-count">0</span></label
//     >
//     <input
//       type="radio"
//       id="filter__favorites"
//       class="filter__input visually-hidden"
//       name="filter"
//     />
//     <label for="filter__favorites" class="filter__label"
//       >Favorites <span class="filter__favorites-count">1</span></label
//     >
//     <input
//       type="radio"
//       id="filter__repeating"
//       class="filter__input visually-hidden"
//       name="filter"
//     />
//     <label for="filter__repeating" class="filter__label"
//       >Repeating <span class="filter__repeating-count">1</span></label
//     >
//     <input
//       type="radio"
//       id="filter__tags"
//       class="filter__input visually-hidden"
//       name="filter"
//     />
//     <label for="filter__tags" class="filter__label"
//       >Tags <span class="filter__tags-count">1</span></label
//     >
//     <input
//       type="radio"
//       id="filter__archive"
//       class="filter__input visually-hidden"
//       name="filter"
//     />
//     <label for="filter__archive" class="filter__label"
//       >Archive <span class="filter__archive-count">115</span></label
//     >
//   </section>`;

// const createContent = () => `<section class="board container"></section>`;


// const createFilterList = () =>
//   `<div class="board__filter-list">
//     <a href="#" class="board__filter">SORT BY DEFAULT</a>
//     <a href="#" class="board__filter">SORT BY DATE up</a>
//     <a href="#" class="board__filter">SORT BY DATE down</a>
//   </div>`;

// const createBoardTasks = () => `<div class="board__tasks"></div>`;


// const createCard = () =>
//   `<article class="card card--black">
//     <div class="card__form">
//       <div class="card__inner">
//         <div class="card__control">
//           <button type="button" class="card__btn card__btn--edit">
//             edit
//           </button>
//           <button type="button" class="card__btn card__btn--archive">
//             archive
//           </button>
//           <button
//             type="button"
//             class="card__btn card__btn--favorites card__btn--disabled"
//           >
//             favorites
//           </button>
//         </div>

//         <div class="card__color-bar">
//           <svg class="card__color-bar-wave" width="100%" height="10">
//             <use xlink:href="#wave"></use>
//           </svg>
//         </div>

//         <div class="card__textarea-wrap">
//           <p class="card__text">Example default task with default color.</p>
//         </div>

//         <div class="card__settings">
//           <div class="card__details">
//             <div class="card__dates">
//               <div class="card__date-deadline">
//                 <p class="card__input-deadline-wrap">
//                   <span class="card__date">23 September</span>
//                   <span class="card__time">11:15 PM</span>
//                 </p>
//               </div>
//             </div>

//             <div class="card__hashtag">
//               <div class="card__hashtag-list">
//                 <span class="card__hashtag-inner">
//                   <span class="card__hashtag-name">
//                     #todo
//                   </span>
//                 </span>

//                 <span class="card__hashtag-inner">
//                   <span class="card__hashtag-name">
//                     #personal
//                   </span>
//                 </span>

//                 <span class="card__hashtag-inner">
//                   <span class="card__hashtag-name">
//                     #important
//                   </span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </article>`;

// const createButton = () => `<button class="load-more" type="button">load more</button>`;











const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const CARDS_QTY = 3;

const mainControl = document.querySelector(`.main__control`);
const mainSection = document.querySelector(`.main`);

renderElement(mainControl, Object(_components_menu_js__WEBPACK_IMPORTED_MODULE_0__["createMenu"])(), `beforeend`);
renderElement(mainSection, Object(_components_controls_js__WEBPACK_IMPORTED_MODULE_2__["createSearchForm"])(), `beforeend`);
renderElement(mainSection, Object(_components_blocks_js__WEBPACK_IMPORTED_MODULE_1__["createContent"])(), `beforeend`);

const board = document.querySelector(`.board`);

renderElement(board, Object(_components_filters_js__WEBPACK_IMPORTED_MODULE_3__["createFilterList"])(), `beforeend`);
renderElement(board, Object(_components_blocks_js__WEBPACK_IMPORTED_MODULE_1__["createBoardTasks"])(), `beforeend`);

const boardTasks = document.querySelector(`.board__tasks`);

for (let i = 0; i < CARDS_QTY; i++) {
  renderElement(boardTasks, Object(_components_cards_js__WEBPACK_IMPORTED_MODULE_4__["createCard"])(), `beforeend`);
}

renderElement(board, Object(_components_button_js__WEBPACK_IMPORTED_MODULE_5__["createButton"])(), `beforeend`);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map