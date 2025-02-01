import {
	getBreakPoint,
	addBreakPointEvent,
	getHTMLTheme,
	setHTMLTheme
} from 'gomdoreelab-lib-material-web';

export class State {
	breakpoint = $state('');
	theme = $state('');

	constructor() {
		this.breakpoint = getBreakPoint();
		this.theme = getHTMLTheme();

		// 적응형 화면 제어 이벤트
		addBreakPointEvent(this.breakpointHandler);
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
	};
}
