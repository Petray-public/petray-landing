export type Theme = "light" | "dark";
export const themeStorageKey = "petray-theme";

// Runs in the document head before the page paints.
export const themeBootstrap = `(function(){var t;try{t=localStorage.getItem('${themeStorageKey}')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#0d1117':'#fcfcfc')})();`;
