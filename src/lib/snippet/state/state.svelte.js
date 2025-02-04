import {
	getBreakPoint,
	addBreakPointEvent,
	getHTMLTheme,
	setHTMLTheme,
	setColorSchemeHTML
} from 'gomdoreelab-lib-material-web';

export class State {
	breakpoint = $state('');
	theme = $state('');
	color = $state('');
	contrast = $state(0);

	constructor() {
		this.breakpoint = getBreakPoint();
		this.theme = getHTMLTheme();
		this.color = '#0099ff';
		this.contrast = 0;

		// 적응형 화면 제어 이벤트
		addBreakPointEvent(this.breakpointHandler);

		// 색상 적용
		this.setColor(this.color, this.contrast);
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
	};
}
