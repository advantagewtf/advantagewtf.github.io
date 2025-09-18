


const scriptsInEvents = {

	async Sound_Event21_Act1(runtime, localVars)
	{
		window.open(localVars.url);
	},

	async Menu_Event64_Act1(runtime, localVars)
	{
		try {
		    let canvas = document.querySelector('canvas');
		    if (!canvas) {
		        return;
		    }
		
		    canvas.style.position = 'relative';
			canvas.style.boxShadow = '0px 0px 2px 5px #373737';
		
		    let bg = document.querySelector('.game-bg');
		    if (!bg) {
		        bg = document.createElement('div');
		        bg.classList.add('game-bg');
		        canvas.parentNode.insertBefore(bg, canvas);
		    }
		
		    bg.style.cssText = `
		        left: 0;
		        right: 0;
		        top: 0;
		        bottom: 0;
		        z-index: 0;
		        position: fixed;
		        background-image: url(${localVars.image});
		        background-position: center;
		        background-repeat: no-repeat;
		        background-size: cover;
		        filter: blur(15px);
		    `;
		} catch (err) {
		    console.error(err);
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

