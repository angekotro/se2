'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * autorId
 */
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (_, res, __, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * autorId
 */
module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (_, res, __, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * autorId
 * body
 */
module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (_, res, __, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 */
module.exports.authorsGET = function authorsGET (_, res, __) {
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * body
 */
module.exports.authorsPOST = function authorsPOST (_, res, __, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * bookId
 */
module.exports.booksBookIdDELETE = function booksBookIdDELETE (_, res, __, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * bookId
 */
module.exports.booksBookIdGET = function booksBookIdGET (_, res, __, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * body
 * bookId
 */
module.exports.booksBookIdPUT = function booksBookIdPUT (_, res, __, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 */
module.exports.booksGET = function booksGET (_, res, __) {
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * body
 */
module.exports.booksPOST = function booksPOST (_, res, __, body) {
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * categoryId
 */
module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (_, res, __, categoryId) {
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * categoryId
 */
module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (_, res, __, categoryId) {
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * body
 * categoryId
 */
module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (_, res, __, body, categoryId) {
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 */
module.exports.categoriesGET = function categoriesGET (_, res, __) {
  Default.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles the HTTP request for this endpoint
 * req
 * res
 * next
 * body
 */
module.exports.categoriesPOST = function categoriesPOST (_, res, __, body) {
  Default.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
