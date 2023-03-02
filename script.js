const load = function(page) {
	new HTMLDocument((body, head) => {
		const loader = body.append('div', ['style*']);
		const x = 40;
		const bord = 14;
		loader.style.position = 'absolute';
		loader.style.top = '50%';
		loader.style.left = '50%';
		loader.style.width = x + 'px';
		loader.style.height = x + 'px';
		loader.style.margin = '-' + ( x / 2 + bord ) + 'px 0 0 -' + ( x / 2 + bord ) + 'px';
		loader.style.borderRadius = '50%';
		loader.style.border = bord + 'px solid grey';
		loader.style.borderTop = bord + 'px solid blue';
		loader.style.transition = 'transform linear 1200ms';
		setTimeout(()=>{
			loader.style.transform = 'rotate(1.5turn)';
		}, 2);
	}, 'LL-10 - loading').load();
	setTimeout(()=>{
		page.load();
	}, 1200);
}

const nav = new HTMLFragment(nav => {
	
});

const home = new HTMLDocument(body => {
	nav.use();
}, 'LL-10');

load(home);
