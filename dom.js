/**
 * Simple DOM read/write
 * @example
 * dom(el).hasClass();
 */

'use strict';

module.exports = function (el) {
	return {

		/**
		 * Test whether or not a node contains a specific class name
		 * @param  {String}  className
		 * @return {Boolean}
		 */
		hasClass: function (className) {
			if (el.classList) {
				return el.classList.contains(className);
			} else {
				return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
			}
		},


		/**
		 * Add class to node
		 * @param  {String} className
		 * @return {Object}
		 */
		addClass: function (className) {

			if (el.classList) {
				el.classList.add(className);
			} else {
				el.className += ' ' + className;
			}

			return this;

		},


		/**
		 * Remove class from node
		 * @param  {String} className
		 * @return {Object}
		 */
		removeClass: function (className) {

			if (el.classList) {
				el.classList.remove(className);
			} else {
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}

			return this;

		},


		/**
		 * Add/remove class from node
		 * @param  {String} className
		 * @return {Object}
		 */
		toggleClass: function (className) {

			if (el.classList) {
				el.classList.toggle(className);
			} else {
				var classes = el.className.split(' ');
				var existingIndex = classes.indexOf(className);

				if (existingIndex >= 0) {
					classes.splice(existingIndex, 1);
				} else {
					classes.push(className);
				}

				el.className = classes.join(' ');
			}

			return this;

		},


		/**
		 * Get top/left offset
		 * @return {Object}
		 */
		offset: function () {
			var rect = el.getBoundingClientRect();
			return {
				top: rect.top + document.body.scrollTop,
				left: rect.left + document.body.scrollLeft
			};
		}

	};
};
