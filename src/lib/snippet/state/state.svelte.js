import {
	getBreakPoint,
	addBreakPointEvent,
	getHTMLTheme,
	setHTMLTheme,
	setColorSchemeHTML
} from 'gomdoreelab-lib-material-web';

export class State {
	/**
	 * @type {"compact" | "medium" | "expanded" | "large" | "extraLarge"}
	 * @public
	 */

	breakpoint = $state('compact');

	/**
	 * @type {"light" | "dark" | "auto"}
	 * @public
	 */

	theme = $state('auto');

	/**
	 * @type {string}
	 * @public
	 */

	color = $state('');

	/**
	 * @type {number}
	 * @public
	 */
	contrast = $state(0);

	constructor() {
		this.app = getLocalStorage('appState', false);
		this.breakpoint = getBreakPoint();
		this.theme = this.app.hasOwnProperty('theme') ? this.app.theme : getHTMLTheme();
		this.color = this.app.hasOwnProperty('color') ? this.app.color : '#0099ff';
		this.contrast = this.app.hasOwnProperty('contrast') ? this.app.contrast : 0;

		// 적응형 화면 제어 이벤트
		addBreakPointEvent(this.breakpointHandler);

		// 색상 적용
		this.setTheme(this.theme);
	}

	// 적응형 화면 제어
	breakpointHandler = {
		compact: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) this.breakpoint = 'compact';
		},
		medium: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) this.breakpoint = 'medium';
		},
		expanded: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) this.breakpoint = 'expanded';
		},
		large: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) this.breakpoint = 'large';
		},
		extraLarge: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) this.breakpoint = 'extraLarge';
		}
	};

	/**
	 * @param {"light" | "dark" | "auto"} theme
	 */

	setTheme = (theme) => {
		setHTMLTheme(theme);

		this.theme = theme;
		this.setColor(this.color, this.contrast);
	};

	/**
	 * @param {string} color
	 * @param {number} contrast
	 */

	setColor = (color, contrast) => {
		setColorSchemeHTML(color, contrast);

		this.color = color;
		this.contrast = contrast;

		setLocalStorage(
			'appState',
			JSON.stringify({ theme: this.theme, color: this.color, contrast: this.contrast })
		);
	};
}

/**
 * @param {String} key
 */

function getLocalStorage(key, str = false) {
	if (!localStorage.hasOwnProperty(key)) {
		return str ? '' : {};
	}

	const value = localStorage.getItem(key);

	return value ? JSON.parse(value) : '';
}

/**
 * @param {string} key
 * @param {string} value
 */

function setLocalStorage(key, value) {
	localStorage.setItem(key, value);
}
